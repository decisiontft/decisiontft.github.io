import requests
import json
import time
import base64

# GitHub repository information
github_user = 'decisiontft'
repository_name = 'stock-market-simulation'
access_token = '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'
base_url = f'https://api.github.com/repos/{github_user}/{repository_name}/contents/'

# Local file paths
local_file_paths = ['A.json', 'B.json', 'C.json', 'D.json', 'E.json']

def update_files():
    for file_path in local_file_paths:
        # Read local file
        with open(file_path, 'r') as f:
            file_content = f.read()
        
        # Encode file content to base64
        encoded_content = base64.b64encode(file_content.encode()).decode('utf-8')
        
        # Get current file information
        response = requests.get(base_url + file_path, headers={"Authorization": f"token {access_token}"})
        if response.status_code == 200:
            file_info = response.json()
            sha = file_info['sha']
            
            # Create update data
            data = {
                "message": f"Update {file_path}",
                "content": encoded_content,
                "sha": sha  # Include the SHA in the update request
            }
            
            # Update the file on GitHub
            update_url = file_info['url']
            response = requests.put(update_url, headers={"Authorization": f"token {access_token}"}, json=data)
            
            if response.status_code == 200:
                print(f"Successfully updated {file_path}")
            else:
                print(f"Failed to update {file_path}")
                print(f"Response content: {response.content.decode()}")
        else:
            print(f"Failed to fetch information for {file_path}")

if __name__ == "__main__":
    while True:
        update_files()
        time.sleep(30)  # Wait for 30 seconds before the next update
