const loadAllPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts",
  );

  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    const allPosts = data.posts;
    if (Array.isArray(allPosts)) {
      // console.log( allPosts);
      displayAllPosts(allPosts);
      return allPosts;
    } else {
      console.error("Invalid data format");
      return null;
    }
  } else {
    console.error("Error fetching data:", res.status);
    return null;
  }
};

const displayAllPosts = (allPosts) => {
  // console.log(allPosts);
  const allPostContainer = document.getElementById("allPostContainer");
  allPosts.forEach((post) => {
    console.log(post);
    const postCard = document.createElement("div");
    postCard.classList = `flex flex-col justify-center py-5`;
    postCard.innerHTML = ` <div
        class="relative flex flex-col md:flex-row  space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto   bg-gray-100">
        <div class="w-full  md:w-1/5 online px-[5%] pt-5 relative inline-block ">
            <img src="${post.image}"
                alt="tailwind logo" class="rounded-xl   w-[98%]" />
                <span class="absolute   top-4 right-7 w-4 h-4 ${post.isActive ? 'bg-green-600 animate-pulse ' : 'bg-red-500'} bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div class="w-full md:w-2/3   flex flex-col space-y-2 p-3">
            <div class="flex gap-10 item-center">
                <p class="text-gray-500 font-medium hidden md:block"># ${post.category}</p>
                <div class="flex items-center">
                    Author : ${post.author.name
                    }
                </div>
            </div>
            <h3 class="font-black text-gray-800  text-xl">${post.title}
            </h3>
            <p class="md:text-lg text-gray-500 text-base">${post.description}</p>
            <hr class="border-2 border-dashed">
            <div class="inline-flex items-center gap-2">
                <i class="fa-regular  fa-comment-dots"></i>
                <p>${post.comment_count
                }</p>
                <i class="fa-regular ml-4 fa-eye"></i>
                <p>${post.view_count
                }</p>
                <i class="fa-regular ml-4 fa-clock"></i>
                <p>${post.posted_time} min</p>
            </div>

        </div>
    </div>`;
    allPostContainer.appendChild(postCard);
  });
};

const loadLatestPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts",
  );

  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    if (Array.isArray(data)) {
      // console.log(data);
      return data;
    } else {
      console.error("Invalid data format");
      return null;
    }
  } else {
    console.error("Error fetching data:", res.status);
    return null;
  }
};
loadAllPosts();
loadLatestPosts();
