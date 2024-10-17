import React from 'react';

const Youtube = () => {
  const videos = [
    {
      id: 1,
      title: "Melek Teknologi Petani Muda Bisa Sukses Di Bidang Pertanian",
      thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_1/hqdefault.jpg",
      link: "https://youtu.be/s9qZnhpgspg?si=LZXP4p2kCk33LD4w",
      creator: "CapCapung"
    },
    {
      id: 2,
      title: "Pertanian Modern Dengan Teknologi Smart Farming Bisa Ekspor Ke Luar Negeri",
      thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_2/hqdefault.jpg",
      link: "https://youtu.be/ZAma7yCHOrM?si=raPnoyUMDg848Zjv",
      creator: "SeribuMimpi"
    },
    {
      id: 3,
      title: "Smart Farming Hemat : Panen Cabai Maksimal di Open Field",
      thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID_3/hqdefault.jpg",
      link: "https://youtu.be/1X8DSNJl7n0?si=DLdURiAwlBrHisI-",
      creator: "YESS Programme"
    }
  ];

  return (
    <div className="container mx-auto px-10 lg:px-0 md:px-0 max-w-sm lg:max-w-4xl md:max-w-2xl mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-2">{video.title}</h3>
                <p className="text-xs">{video.creator}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;