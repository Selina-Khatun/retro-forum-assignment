const loadAllPosts = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/posts'
  );

  if (res.ok) {
    const data = await res.json();
    console.log(data);
   
    if (Array.isArray(data.posts)) {
        console.log(data.posts); 
        return data.posts;
    } else {
      console.error('Invalid data format');
      return null;
    }
  } else {
    console.error('Error fetching data:', res.status);
    return null;
  }
};


const loadLatestPosts = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  );

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    if (Array.isArray(data)) {
        console.log(data); 
        return data;
    } else {
      console.error('Invalid data format');
      return null;
    }
  } else {
    console.error('Error fetching data:', res.status);
    return null;
  }
};
loadAllPosts();
loadLatestPosts();
