import os
import subprocess
from datetime import datetime, timedelta

# Configuration
START_DATE = datetime(2025, 3, 25)
END_DATE = datetime(2025, 5, 2)
REPO_ROOT = os.path.dirname(os.path.abspath(__file__))
EXCLUDE_DIRS = {'.git', 'node_modules', '__pycache__'}

# Collect all files to commit
files_to_commit = []
for root, dirs, files in os.walk(REPO_ROOT):
    # Exclude unwanted directories
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for file in files:
        # Exclude this script itself
        if file == os.path.basename(__file__):
            continue
        file_path = os.path.relpath(os.path.join(root, file), REPO_ROOT)
        files_to_commit.append(file_path)

# Sort files for deterministic order
files_to_commit.sort()

total_days = (END_DATE - START_DATE).days + 1
max_files = min(len(files_to_commit), total_days)

print(f"Preparing to commit {max_files} files from {START_DATE.date()} to {END_DATE.date()}...")

for i in range(max_files):
    file_path = files_to_commit[i]
    commit_date = START_DATE + timedelta(days=i)
    date_str = commit_date.strftime('%Y-%m-%dT12:00:00')
    commit_msg = f"{os.path.basename(file_path)} added"

    print(f"Adding and committing {file_path} on {date_str}...")
    # Check if file is ignored by git
    check_ignore = subprocess.run(["git", "check-ignore", file_path], capture_output=True)
    if check_ignore.returncode == 0:
        print(f"Skipping {file_path}: file is ignored by git.")
        continue
    # Try to add the file, skip if it fails
    add_result = subprocess.run(["git", "add", file_path])
    if add_result.returncode != 0:
        print(f"Skipping {file_path}: could not add file (possibly ignored or error).")
        continue
    # Check if there is anything to commit
    diff_result = subprocess.run(["git", "diff", "--cached", "--quiet", "--", file_path])
    if diff_result.returncode == 0:
        print(f"Skipping {file_path}: no changes to commit.")
        continue
    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = date_str
    env["GIT_COMMITTER_DATE"] = date_str
    subprocess.run(["git", "commit", "-m", commit_msg], check=True, env=env)

print("All files committed with backdated timestamps.")
print("You can now push your branch to GitHub.") 