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
    // console.log(post);
    const postCard = document.createElement("div");
    postCard.classList = `flex flex-col justify-center py-5`;
    postCard.innerHTML = ` <div
        class="relative flex flex-col md:flex-row  space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto   bg-gray-100">
        <div class="w-full  md:w-1/5 online px-[5%] pt-5 relative inline-block ">
            <img src="${post.image}"
                alt="tailwind logo" class="rounded-xl   w-[98%]" />
                <span class="absolute   top-4 right-7 w-4 h-4 ${
                  post.isActive ? "bg-green-600 animate-pulse " : "bg-red-500"
                } bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div class="w-full md:w-2/3   flex flex-col space-y-2 p-3">
            <div class="flex gap-10 item-center">
                <p class="text-gray-500 font-medium hidden md:block"># ${
                  post.category
                }</p>
                <div class="flex items-center">
                    Author : ${post.author.name}
                </div>
            </div>
            <h3 class="font-black text-gray-800  text-xl">${post.title}
            </h3>
            <p class="md:text-lg text-gray-500 text-base">${
              post.description
            }</p>
            <hr class="border-2 border-dashed">
            <div class="inline-flex items-center gap-2">
                <i class="fa-regular  fa-comment-dots"></i>
                <p>${post.comment_count}</p>
                <i class="fa-regular ml-4 fa-eye"></i>
                <p>${post.view_count}</p>
                <i class="fa-regular ml-4 fa-clock"></i>
                <p>${post.posted_time} min</p>
            </div>

        </div>
    </div>`;
    allPostContainer.appendChild(postCard);
  });
};
// LatestPosts section starts from here

const loadLatestPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts",
  );

  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    if (Array.isArray(data)) {
      // console.log(data);
      displayLatestPosts(data);
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

const displayLatestPosts = (data) => {
  // console.log(data);
  const LatestPostsContainer = document.getElementById("LatestPostsContainer");
  data.forEach((latestPost) => {
    console.log(latestPost);
    const latestCard = document.createElement("div");
    latestCard.classList = `antialiased font-sans`;
    latestCard.innerHTML = `
<div class="max-w-6xl mx-auto">
<div class="flex items-center justify-center">
    <div class="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
        <div class="bg-white border-2 rounded-lg overflow-hidden">
            <figure class="px-6 pt-6">
                <img src="${latestPost.cover_image}"
                    alt="Shoes" class="rounded-xl" />
            </figure>

            <div class="p-6">
                <div class="flex py-4  text-gray-700">
                    <div class="flex-1 inline-flex gap-3 items-center">
                        <i class="fa-regular fa-calendar"></i>
                        <p>${latestPost.author.posted_date
                        } </p>

                    </div>

                </div>
                <p class="font-bold text-lg py-2">${latestPost.title}</p>
                <p>${latestPost.description
                }</p>
                <div class=" pt-3 pb-4   ">
                    <div class="text-xs uppercase font-bold text-gray-600 tracking-wide"></div>
                    <div class="flex items-center">
                        <div class="flex-shrink-0 border-2 rounded-full">
                            <img class="w-8 h-8 rounded-full"
                                src="${latestPost.profile_image}"
                                alt="${latestPost.author.name}">
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-lg font-bold text-gray-900 truncate dark:text-white">
                            ${latestPost.author.name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        ${latestPost.author.designation}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
`;
LatestPostsContainer.appendChild(latestCard);
  });
};

loadAllPosts();
loadLatestPosts();
