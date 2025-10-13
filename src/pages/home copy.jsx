import React, { useState } from 'react';
import { BASE_URL } from '../api/config/api';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UrlInput from '../components/input';
import Loader from '../components/loader';
import { extractVideo } from '../api/extractor';
import './home.css';
import '../components/components.module.css'; // ✅ keep your styles

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await extractVideo(url);
      setData(result);
    } catch (err) {
      console.error(err);
      setError("Failed to extract video. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (format = 'mp4') => {
    if (!data?.proxy_url) return;
    const downloadUrl = `${BASE_URL.replace('/api/v1', '')}${data.proxy_url}&format=${format}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="home-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className="hero-section">
              <h1 className="hero-title">
                All-in-One Video <span className="title-highlight">Downloader</span>
              </h1>
              <p className="hero-subtitle">
                Download videos from YouTube, TikTok, Instagram, Twitter and more.
                Fast, free, and easy to use.
              </p>

              {/* Input Section */}
              <div className="input-section">
                <UrlInput url={url} setUrl={setUrl} onSubmit={handleSubmit} />
                {loading && <Loader />}
                {error && (
                  <div className="error-message">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {error}
                  </div>
                )}
              </div>

              {/* Show download options once video is extracted */}
              {data && (
                <div className="video-result mt-5 text-center">
                  <h4 className="mb-3">{data.title || 'Ready to Download'}</h4>

                  <div className="download-buttons d-flex flex-column align-items-center">
                    <Button
                      className="download-btn-primary"
                      onClick={() => handleDownload('mp4')}
                    >
                      <i className="bi bi-download"></i>
                      <span>Download HD Video</span>
                    </Button>

                    <Button
                      className="download-btn-secondary"
                      onClick={() => handleDownload('mp3')}
                    >
                      <i className="bi bi-music-note-beamed"></i>
                      <span>Audio Only (MP3)</span>
                    </Button>

                    <div
                      className="text-center"
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        marginTop: '1rem',
                      }}
                    >
                      <i className="bi bi-info-circle me-1"></i>
                      Best quality available from source
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
