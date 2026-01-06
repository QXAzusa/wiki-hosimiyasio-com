import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './tachie-styles.css'
const PhotoAlbum = () => {
    const photos = [
        {
          year: 2024,
          images: [
            { src: '/img/tachie_202402.jpg', description: '' }
          ]
        },
        {
            year: 2022,
            images: [
              { src: '/img/tachie_202207.jpg', description: '' }
            ]
        },
        {
            year: 2021,
            images: [
              { src: '/img/tachie_202112.jpg', description: '' }
            ]
        },
        {
          year: 2020,
          images: [
            { src: '/img/tachie_2020.jpg', description: '' }
          ]
        },
       ];

  const [lightbox, setLightbox] = useState(null);

  return (
    <Layout title="立绘" description="历年立绘时间轴">
      <main className="container padding-vert--lg">
        <header className="margin-bottom--lg text--center">
          <h1 className="tachie_title margin-bottom--sm">立绘</h1>
        </header>
        <div className="tachie_horizontal">
          <div className="timeline_bar"></div>
          <div className="timeline_grid">
            {photos.map((photo) => (
              <div className="timeline_item" key={photo.year}>
                <div className="timeline_head">
                  <div className="timeline_node" aria-hidden="true"></div>
                  <div className="timeline_year">{photo.year}</div>
                </div>
                {photo.images.map((image, idx) => (
                  <figure key={idx} className="tachie_figure">
                    <img
                      className="tachie_img"
                      src={image.src}
                      alt={`${photo.year} 立绘 ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      onClick={() => setLightbox({ src: image.src, alt: `${photo.year} 立绘 ${idx + 1}` })}
                    />
                    {image.description ? <figcaption>{image.description}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        {lightbox && (
          <div className="tachie_lightbox" onClick={() => setLightbox(null)}>
            <div className="lightbox_content" onClick={(e) => e.stopPropagation()}>
              <img className="lightbox_img" src={lightbox.src} alt={lightbox.alt} />
              <button className="lightbox_close" onClick={() => setLightbox(null)} aria-label="关闭">×</button>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default PhotoAlbum;
