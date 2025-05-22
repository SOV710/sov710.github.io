import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing posts
const POSTS_DIR = path.join(__dirname, '../docs/posts');
// README.md file path
const README_PATH = path.join(POSTS_DIR, 'README.md');

// Function to read frontmatter from markdown files
function readFrontMatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return matter(content);
}

// Main function to update the README.md
function updateReadme() {
  // Read all markdown files in the posts directory
  const files = fs.readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.md') && file !== 'README.md');
  
  // Extract information from each file
  const posts = files.map(file => {
    const filePath = path.join(POSTS_DIR, file);
    const { data } = readFrontMatter(filePath);
    return {
      title: data.title || path.basename(file, '.md'),
      date: data.date ? new Date(data.date) : new Date(0),
      path: `./${file}`,
      sticky: data.sticky || 0,
      fileName: file
    };
  });
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => {
    // First sort by sticky
    if (a.sticky && b.sticky) {
      return b.sticky - a.sticky;
    } else if (a.sticky) {
      return -1;
    } else if (b.sticky) {
      return 1;
    }
    
    // Then sort by date
    return b.date - a.date;
  });
  
  // Read the current README
  const readmeContent = fs.readFileSync(README_PATH, 'utf8');
  
  // Extract frontmatter and preserve it
  const { data: frontmatter, content } = matter(readmeContent);
  
  // Generate the new content
  let newContent = `---\n`;
  
  // Preserve the original frontmatter
  Object.keys(frontmatter).forEach(key => {
    newContent += `${key}: ${JSON.stringify(frontmatter[key])}\n`;
  });
  
  newContent += `---\n\n`;
  newContent += `# 不定期总结\n\n`;
  newContent += `::: tip 提示\n`;
  newContent += `除特别注明外，本站所有文章均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可协议\n`;
  newContent += `:::\n`;
  newContent += `## 文章列表\n\n`;
  
  // Add each post to the list
  posts.forEach(post => {
    newContent += `- [${post.title}](${post.path})\n`;
  });
  
  newContent += `\n## 关于总结\n\n`;
  newContent += `不定期更新各种主题的总结，希望能坚持下去……\n\n`;
  newContent += `::: tip 提示\n`;
  newContent += `此列表由脚本自动生成，最后更新时间: ${new Date().toISOString()}\n`;
  newContent += `:::\n`;
  
  // Write the new content to README.md
  fs.writeFileSync(README_PATH, newContent);
  
  console.log(`Updated posts list in ${README_PATH}`);
}

// Run the update function
updateReadme(); 
