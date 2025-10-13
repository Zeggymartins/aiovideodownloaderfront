// utils/detectPlatform.js
export function detectPlatform(url) {
    if (!url) return null;
    if (/youtube\.com|youtu\.be/.test(url)) return "youtube";
    if (/tiktok\.com/.test(url)) return "tiktok";
    if (/instagram\.com/.test(url)) return "instagram";
    if (/facebook\.com/.test(url)) return "facebook";
    return "unknown";
}
