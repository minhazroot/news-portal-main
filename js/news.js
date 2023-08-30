const LodeNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const dates = await res.json()

    const NewsCategory = dates.data.news_category;
    DisplayNewsCategory(NewsCategory)

}
const DisplayNewsCategory = (Category) => {

    const TabCategory = document.getElementById('Tab_Category_conaainer')

    Category.slice(0, 3).forEach(headline => {

        // console.log(headline)
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="GetNewsCategoryId('${headline?.category_id}')" class="tab tab-active">${headline?.category_name}</a>
        `
        TabCategory.appendChild(div)



    });

}
const GetNewsCategoryId = async (GetId) => {

    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${GetId}`)
    const news = await res.json();
    const AllNews = news.data;
    // console.log(AllNews)
    const AllNewsContaner = document.getElementById('All_News_Contaner');
    AllNewsContaner.innerHTML = " "
    AllNews.forEach(News => {
        console.log(News)
        const NewsDiv = document.createElement('NewsCard')
        NewsDiv.classList = `card card-side bg-base-100 shadow-xl mb-5`
        NewsDiv.innerHTML = `
        <figure><img class="h-full w-[400px]" src="${News?.image_url}" alt="Movie" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${News?.title}</h2>
            <p>${News?.details}</p>
            <div class="flex justify-between items-center mt-5">
                <div class="flex items-center gap-x-5">
                    <div>
                        <img class="h-10 w-10 rounded-full" src="${News?.author?.img}"
                            alt="">
                    </div>

                    <div>
                        <p>${News?.author?.name}</p>
                        <p>${News?.author?.published_date}</</p>

                    </div>


                </div>
                <div class="flex justify-center">
                    <a href=""><i class="fa-regular fa-eye"></i></a>
                    <a href="">${News.total_view}</a>

                </div>
                <div  >
               <div class="flex items-center gap-x-5">
                <div>
                <p>${News?.rating?.number}</p>
                
                </div>
              
                
                    <div class="rating">

                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" checked />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                    </div>
                </div>
                </div>
                <div>
                    <a href=""> <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

        </div>



        <p>${News?.author?.name}</p>
        
        
        `
        AllNewsContaner.appendChild(NewsDiv)
    })

}
LodeNews()
GetNewsCategoryId("02")