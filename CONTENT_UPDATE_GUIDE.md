# How to Update Your Portfolio Content

This guide explains how to add new research papers and tools to your portfolio website. The system is designed to be straightforward, primarily involving editing JSON data files and adding Markdown files for research content.

## Directory Structure Overview

-   **Research Content**: Markdown files for your research papers are stored in `portfolio-app/src/app/research-content/`.
-   **Data Files**:
    -   Research metadata is managed in `portfolio-app/src/app/data/research.json`.
    -   Tools metadata is managed in `portfolio-app/src/app/data/tools.json`.

## Adding a New Research Paper

To add a new research paper, follow these two steps:

1.  **Create the Markdown File for Your Research:**
    *   Navigate to the `portfolio-app/src/app/research-content/` directory in your local copy of the repository.
    *   Create a new Markdown file for your research paper (e.g., `my-new-research-title.md`). Use a descriptive name for the file.
    *   Write or paste the content of your research paper into this Markdown file. You can use standard Markdown syntax for formatting (headings, lists, links, code blocks, etc.).

2.  **Update the `research.json` Data File:**
    *   Open the `portfolio-app/src/app/data/research.json` file.
    *   This file contains an array of JSON objects, where each object represents a research paper.
    *   Add a new JSON object to this array for your new paper. The object should have the following structure:

        ```json
        {
          "id": "unique-identifier-for-your-research", // e.g., "new-research-2025"
          "title": "The Title of Your New Research Paper",
          "date": "YYYY-MM-DD", // e.g., "2025-05-10"
          "abstract": "A brief summary or abstract of your research paper. This will be shown on the main research listing page.",
          "filePath": "research-content/my-new-research-title.md", // Path to the Markdown file you created in step 1
          "tags": ["Keyword1", "Cybersecurity", "New Topic"] // Relevant keywords or tags
        }
        ```
    *   **Important Fields:**
        *   `id`: A unique string to identify this research paper. This will be part of the URL, so use lowercase letters, numbers, and hyphens (e.g., `automated-threat-modeling-v2`).
        *   `title`: The full title of your research.
        *   `date`: The publication or completion date of the research.
        *   `abstract`: A short summary.
        *   `filePath`: The relative path from the `portfolio-app/src/app/` directory to your Markdown file. It should always start with `research-content/` followed by your Markdown file's name.
        *   `tags`: An array of strings representing keywords.
    *   Ensure your new JSON object is correctly formatted and added to the array (e.g., add a comma after the preceding object if it's not the first one).

## Adding a New Tool

To add a new tool you've built or contributed to:

1.  **Update the `tools.json` Data File:**
    *   Open the `portfolio-app/src/app/data/tools.json` file.
    *   This file contains an array of JSON objects, where each object represents a tool.
    *   Add a new JSON object to this array for your new tool. The object should have the following structure:

        ```json
        {
          "id": "unique-tool-identifier", // e.g., "my-cool-scanner-v1"
          "name": "Name of Your Tool",
          "description": "A detailed description of what the tool does, its features, and its purpose.",
          "link": "https://example.com/tool-demo-or-page", // Optional: URL to a live demo, project page, or where the tool can be accessed/downloaded. Use "#" if no link.
          "sourceCode": "https://github.com/yourusername/your-tool-repo", // Optional: URL to the source code repository (e.g., GitHub, GitLab).
          "tags": ["Python", "Network Security", "Automation"] // Relevant technologies or categories
        }
        ```
    *   **Important Fields:**
        *   `id`: A unique string for the tool.
        *   `name`: The name of the tool.
        *   `description`: A comprehensive description.
        *   `link` (Optional): A URL to the tool's page or demo. If not applicable, you can omit this field or set its value to `"#"` or an empty string.
        *   `sourceCode` (Optional): A URL to the tool's source code repository.
        *   `tags`: An array of strings for relevant keywords.

## Committing and Pushing Your Changes

After making these changes:

1.  **Save** all modified files (`.md` and `.json`).
2.  **Commit** your changes to your local Git repository:
    ```bash
    git add .
    git commit -m "docs: add new research/tool: [Name of research/tool]"
    ```
3.  **Push** your changes to the `main` branch of your GitHub repository:
    ```bash
    git push origin main
    ```

If your Vercel deployment is connected to this GitHub repository, Vercel should automatically detect these changes and trigger a new deployment to update your live portfolio website.

If you encounter any issues or have questions, please refer to the project documentation or contact support.
