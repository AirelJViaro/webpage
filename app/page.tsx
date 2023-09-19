'use client' 

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Page() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/api/downloadFullHistory')
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
   <table className="table table-bordered table-hover shadow p-3 mb-5 bg-white rounded">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>Channel</th>
          <th>Duration</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
       {videoData.map((video, index) => (
          <tr key={index}>
            <td>{video.title}</td>
            <td>{video.channel}</td>
            <td>{video.duration}</td>
            <td>{new Date(video.dateTime).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}