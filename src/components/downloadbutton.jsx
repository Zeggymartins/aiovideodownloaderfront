import React, { useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Loader2 } from "lucide-react";
import "./components.module.css";


const DownloadOptions = ({
  proxyUrl,
  title,
  platform,
  backendRoot,
  thumbnailUrl,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (format = "mp4") => {
    try {
      setLoading(true);

      // ✅ Build proper download URL
      let url;
      if (proxyUrl.startsWith("/api")) {
        url = `${backendRoot}${proxyUrl}${
          proxyUrl.includes("?") ? "&" : "?"
        }format=${format}`;
      } else if (proxyUrl.startsWith("http")) {
        url = `${backendRoot}/api/v1/${platform}/download?video_url=${encodeURIComponent(
          proxyUrl
        )}&title=${encodeURIComponent(title)}&format=${format}`;
      } else {
        url = `${backendRoot}/api/v1/${platform}/download?video_url=${encodeURIComponent(
          `${backendRoot}${proxyUrl}`
        )}&title=${encodeURIComponent(title)}&format=${format}`;
      }

      console.log("🎯 Download URL:", url);

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to download file");

      // ✅ Create a blob URL and trigger browser download
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title || "video"}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("❌ Download failed:", err);
      alert("Failed to download. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="download-section d-flex justify-content-center mt-5 mb-5">
      <Card
        className="shadow-lg border-0"
        style={{
          width: "25rem",
          borderRadius: "1rem",
          background:
            "linear-gradient(145deg, rgba(17,24,39,0.95), rgba(31,41,55,0.85))",
          color: "white",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        {thumbnailUrl && (
          <Card.Img
            variant="top"
            src={thumbnailUrl}
            alt={title || "Video Thumbnail"}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              height: "200px",
              objectFit: "cover",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
        )}

        <Card.Body className="text-center p-4">
          <Card.Title
            className="fw-bold mb-3"
            style={{ fontSize: "1.25rem", color: "#f8fafc" }}
          >
            {title || "Ready to Download"}
          </Card.Title>

          <Card.Text
            className="text-muted mb-4"
            style={{ color: "#cbd5e1" }}
          >
            Choose your preferred format below 👇
          </Card.Text>

          <ButtonGroup vertical className="w-100">
            <Button
              className="download-btn-primary mb-3 d-flex justify-content-center align-items-center"
              onClick={() => handleDownload("mp4")}
              disabled={loading}
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                padding: "0.9rem 1rem",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="me-2 animate-spin" size={18} />
                  Downloading...
                </>
              ) : (
                <>
                  <i className="bi bi-download me-2"></i>
                  Download HD Video
                </>
              )}
            </Button>

            <Button
              className="download-btn-secondary d-flex justify-content-center align-items-center"
              onClick={() => handleDownload("mp3")}
              disabled={loading}
              style={{
                background: "rgba(253, 183, 20, 0.15)",
                border: "2px solid rgba(253, 183, 20, 0.5)",
                color: "#fcd34d",
                borderRadius: "10px",
                fontWeight: "600",
                padding: "0.9rem 1rem",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="me-2 animate-spin" size={18} />
                  Processing...
                </>
              ) : (
                <>
                  <i className="bi bi-music-note-beamed me-2"></i>
                  Audio Only (MP3)
                </>
              )}
            </Button>
          </ButtonGroup>

          <div
            className="text-center mt-4"
            style={{ fontSize: "0.85rem", color: "#9ca3af" }}
          >
            <i className="bi bi-info-circle me-1"></i>
            Best quality available from source
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DownloadOptions;
