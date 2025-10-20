#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    
    const date = new Date(dateString);
    const [year, month, day] = dateString.split('-').map(Number);
    
    return date.getFullYear() === year && 
           date.getMonth() === month - 1 && 
           date.getDate() === day;
}

function getTodaysDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

async function updateSitemapDates() {
    try {
        
        console.log('🔍 Checking sitemap.xml for lastmod dates...\n');
        
        if (!fs.existsSync(SITEMAP_PATH)) {
            console.error('❌ sitemap.xml not found at:', SITEMAP_PATH);
            process.exit(1);
        }
        
        let sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
        
        const urlPattern = /<url>([\s\S]*?)<\/url>/g;
        const lastmodPattern = /<lastmod>(.*?)<\/lastmod>/;
        const locPattern = /<loc>(.*?)<\/loc>/;
        
        let urlMatches = [...sitemapContent.matchAll(urlPattern)];
        let hasChanges = false;
        
        if (urlMatches.length === 0) {
            console.log('ℹ️  No URLs found in sitemap.xml');
            rl.close();
            return;
        }
        
        console.log(`Found ${urlMatches.length} URL(s) in sitemap.xml\n`);
        
        for (let i = 0; i < urlMatches.length; i++) {
            const urlBlock = urlMatches[i][1];
            const locMatch = urlBlock.match(locPattern);
            const lastmodMatch = urlBlock.match(lastmodPattern);
            
            if (!locMatch || !lastmodMatch) {
                continue;
            }
            
            const url = locMatch[1];
            const currentDate = lastmodMatch[1];
            
            console.log(`📄 Page: ${url}`);
            console.log(`📅 Current lastmod: ${currentDate}`);
            
            const shouldUpdate = await askQuestion('Has this page been updated? [N/y]: ');
            
            if (shouldUpdate.toLowerCase() === 'y' || shouldUpdate.toLowerCase() === 'yes') {
                let newDate = '';
                let validDate = false;
                
                while (!validDate) {
                    const dateInput = await askQuestion(`Enter new date (YYYY-MM-DD) or press Enter for today (${getTodaysDate()}): `);
                    
                    if (dateInput.trim() === '') {
                        newDate = getTodaysDate();
                        validDate = true;
                    } else if (isValidDate(dateInput.trim())) {
                        newDate = dateInput.trim();
                        validDate = true;
                    } else {
                        console.log('❌ Invalid date format. Please use YYYY-MM-DD format.');
                    }
                }
                
                const oldLastmodTag = `<lastmod>${currentDate}</lastmod>`;
                const newLastmodTag = `<lastmod>${newDate}</lastmod>`;
                
                sitemapContent = sitemapContent.replace(oldLastmodTag, newLastmodTag);
                hasChanges = true;
                
                console.log(`✅ Updated ${url} lastmod from ${currentDate} to ${newDate}\n`);
            } else {
                console.log(`⏭️  Skipped ${url}\n`);
            }
        }
        
        if (hasChanges) {
            fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
            console.log('💾 Sitemap.xml has been updated successfully!');
        } else {
            console.log('ℹ️  No changes made to sitemap.xml');
        }
        
    } catch (error) {
        console.error('❌ Error updating sitemap:', error.message);
        process.exit(1);
    } finally {
        rl.close();
    }
}

updateSitemapDates().then(() => {
    console.log('\n✨ Prebuild script completed!');
});
