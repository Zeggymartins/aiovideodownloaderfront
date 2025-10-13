import { endpoints } from "./config/api";

// Auto-detect platform from URL
function detectPlatform(url) {
    const u = url.toLowerCase();
    if (u.includes("tiktok.com")) return "tiktok";
    if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
    if (u.includes("instagram.com")) return "instagram";
    if (u.includes("twitter.com") || u.includes("x.com")) return "twitter";
    return "unknown";
}

export async function extractVideo(url) {
    try {
        const platform = detectPlatform(url);
        const endpoint = endpoints[platform];

        if (!endpoint) throw new Error(`Unsupported or unknown platform: ${platform}`);

        const response = await fetch(`${endpoint}/extract`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error("API error:", err);
        throw err;
    }
}
