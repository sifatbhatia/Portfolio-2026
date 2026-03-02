import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const previewsDir = path.join(__dirname, '../public/previews');
const outputPath = path.join(__dirname, '../app/projects/dynamic-projects.json');

function sync() {
    console.log('🚀 Syncing project previews...');

    if (!fs.existsSync(previewsDir)) {
        console.log('⚠️ Previews directory not found.');
        fs.writeFileSync(outputPath, JSON.stringify({}));
        return;
    }

    const items = fs.readdirSync(previewsDir);
    const projectData = {};

    for (const item of items) {
        const itemPath = path.join(previewsDir, item);
        if (fs.statSync(itemPath).isDirectory()) {
            const files = fs.readdirSync(itemPath);
            const screenshots = files.filter(f =>
                f.startsWith('screenshot-') &&
                (f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg'))
            ).sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)?.[0] || '0');
                const numB = parseInt(b.match(/\d+/)?.[0] || '0');
                return numA - numB;
            });

            if (screenshots.length > 0) {
                projectData[item] = {
                    screenshotCount: screenshots.length,
                    thumbnail: `/previews/${item}/${screenshots[0]}`,
                    extension: path.extname(screenshots[0])
                };
            }
        }
    }

    fs.writeFileSync(outputPath, JSON.stringify(projectData, null, 2));
    console.log(`✅ Synced ${Object.keys(projectData).length} projects to dynamic-projects.json`);
}

sync();
