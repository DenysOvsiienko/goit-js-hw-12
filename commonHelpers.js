import{a as w,S,i as o}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const y=async(r,e,c)=>(await w.get("https://pixabay.com/api/",{params:{key:"44175237-f9b9fdf7256a15d8718cda915",q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:c}})).data;function v(r){return r.hits.map(e=>`<li class="gallery-item">
        <a class="image-link" href="${e.largeImageURL}"
          ><img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"
        /></a>
        <div class="image-stats">
          <div class="image-stat">
            <b>Likes</b>
            <p>${e.likes}</p>
          </div>
          <div class="image-stat">
            <b>Views</b>
            <p>${e.views}</p>
          </div>
          <div class="image-stat">
            <b>Comments</b>
            <p>${e.comments}</p>
          </div>
          <div class="image-stat">
            <b>Downloads</b>
            <p>${e.downloads}</p>
          </div>
        </div>
      </li>`).join("")}const q="/goit-js-hw-12/assets/errorSvg-843d4981.svg",L="/goit-js-hw-12/assets/cautionSvg-75a3a476.svg",$="/goit-js-hw-12/assets/informSvg-2485fc96.svg",m=document.querySelector(".search-form"),g=document.querySelector(".search-input"),a=document.querySelector(".loader"),n=document.querySelector(".gallery"),l=document.querySelector(".load-btn");let b=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const p=15;let i=1,f=0,h="";m.addEventListener("submit",async r=>{if(r.preventDefault(),!g.value.trim()){m.reset();return}try{i=1,h="",l.classList.add("visually-hidden"),n.innerHTML="",a.classList.remove("visually-hidden");const e=await y(g.value.trim(),i,p);e.total||(a.classList.remove("visually-hidden"),o.error({iconUrl:q,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),a.classList.add("visually-hidden"),n.insertAdjacentHTML("beforeend",v(e)),b.refresh(),f=Math.ceil(e.totalHits/p),h=g.value.trim(),i<f&&l.classList.remove("visually-hidden")}catch(e){o.warning({iconUrl:L,position:"topRight",message:`${e}`})}m.reset()});l.addEventListener("click",async r=>{i+=1,i>f&&(o.info({iconUrl:$,position:"topRight",backgroundColor:"#09f",message:"We're sorry, but you've reached the end of search results."}),a.classList.add("visually-hidden"),l.classList.add("visually-hidden"));try{a.classList.remove("visually-hidden");const e=await y(h,i,p);a.classList.add("visually-hidden"),n.insertAdjacentHTML("beforeend",v(e)),b.refresh(),window.scrollBy({top:n.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}catch(e){o.warning({iconUrl:L,position:"topRight",message:`${e}`})}});
//# sourceMappingURL=commonHelpers.js.map
