(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.querySelectorAll(".mehrwertsteuer"),s=document.querySelectorAll(".prozentsatz"),f=document.querySelector(".container__title.input__container"),p=document.querySelector(".btn"),m=document.querySelector("#input__betrag"),i=document.querySelector(".mehrwersteuerbetrag__output"),l=document.querySelector(".endpreis__output");let d=!1;const g=o=>{const t=o.target;f.innerText=t.value==="netto"?"Nettobtrag(Preis ohne Mehrwertsteuer) in Euro*":"Brutto (Preis inklusive Mehrwertsteuer) in Euro*",d=t.value==="brutto"};a.forEach(o=>o.addEventListener("click",g));const h=()=>{for(const o of s)if(o.checked)return Number(o.value);return Number(s[0].value)},y=()=>{const o=h(),t=+m.value,n=t*(o/100);t&&(d?(i.textContent=`€ ${n.toFixed(2)}`,l.textContent=`€ ${(t-n).toFixed(2)}`):(i.textContent=`€ ${n.toFixed(2)}`,l.textContent=`€ ${(t+n).toFixed(2)}`))};p.addEventListener("click",y);
