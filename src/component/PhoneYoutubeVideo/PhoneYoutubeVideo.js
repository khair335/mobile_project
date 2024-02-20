import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PhoneYoutubeVideo = ({ title }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = 'AIzaSyAi0epYrpmYlRl74ePN3GPskU3yJc9vZec'; // Replace with your YouTube Data API key
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${title}&type=video&order=relevance&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const videosData = data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));

        setVideos(videosData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [title]);

  return (
    <div className='w-full mt-2'>
      <h3 className='uppercase text-[#777] my-5 font-semibold text-lg h-[35px] relative before:absolute before:h-[35px] before:w-3 before:bg-gray-400 before:left-[-20px] before:top-[-4px]'>
        {title} Video
      </h3>
      <div className='flex flex-wrap justify-between gap-y-4'>
        {videos.map((video, index) => (
          <Link to={video.link} target="_blank" className='max-w-[200px] w-full' key={index}>
            <div className='w-full'>
              <img className='w-full' src={video.thumbnail} alt={video.title} />
            </div>
            <h3 className='mt-2 text-gray-800 line-clamp-2'>{video.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhoneYoutubeVideo;
