import{_ as w,l as M,s as _e,u as t,a as c,c as d,g as a,b as u,q as C,t as I,d as g,v as B,r as h,V as T,S as G,x as O,y as S,z as k,A as ae,C as ne,D as X,E as me,p as D,f as z,w as U,i as oe,G as pe,m as fe,H as ve,I as Y,o as ge,F as Z,j as ee,T as te,J as ye,K as P,L as we}from"./index-LJDEKwNa.js";import{a as j}from"./axios-L6U4YIEh.js";import{u as xe,a as E,R as le,b as $e,c as Ce,o as be}from"./index-OELyTkfO.js";const ke={name:"co-hamburger-menu",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M80 96h352v32H80zM80 240h352v32H80zM80 384h352v32H80z" class="ci-primary"/>'},He={name:"io-close",minX:0,minY:0,width:512,height:512,raw:'<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/>'},Me={name:"md-deleteoutline-twotone",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0V0z"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/>'},Se={name:"md-delete-twotone",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0V0z"/><path d="M8 9h8v10H8z" opacity=".3"/><path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/>'},De={name:"md-history",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>'},ze={name:"md-logout",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>'},Ie={name:"md-send",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>'},Te={name:"md-lightmode-round",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>'},je={key:0,class:"file-detail d-flex flex-column justify-content-center align-items-center text-center"},Be={class:"mx-1"},Ve={__name:"FileName",props:["files"],setup(e){let n=e;return M(_e),(l,s)=>t(n).files?(c(),d("div",je,[a("button",{onClick:s[0]||(s[0]=r=>l.$emit("deleteFile"))},"X"),a("span",Be,[u(t(C),{class:"file-icon",name:"bi-file-earmark-text",scale:"3"})]),a("p",null,I(t(n).files[0].name),1)])):g("",!0)}},qe=w(Ve,[["__scopeId","data-v-57a50329"]]),ie=B("userData",()=>{let e=h(""),n=h(""),l=h("");function s(){let r=T.get("jwt");j.get("https://impactstudio.pythonanywhere.com/api/user/data",{withCredentials:!0,headers:{Authorization:`Bearer ${r}`}}).then(o=>{e.value=o.data.name,n.value=o.data.email,l.value=o.data.id}).catch(o=>{e.value="unknown",n.value="unknown"})}return{UserName:e,email:n,getUserData:s}}),W=B("fetchHistory",()=>{let e=h([]);return h(""),{getHistory:()=>{let l=T.get("jwt");j.get("https://impactstudio.pythonanywhere.com/api/user/get_chat_history/",{withCredentials:!0,headers:{Authorization:`Bearer ${l}`}}).then(s=>{e.value=s.data.user_chat_history}).catch(s=>{console.log(s)})},history:e}}),J=B("toggleChat",()=>{let e=h(!0),n=h(!1),l=h(0);return{newChat:e,history:n,count:l,showChat:()=>{e.value=!0,n.value=!1,l.value++},showHistory:()=>{n.value=!0,e.value=!1,l.value++}}}),L=B("fetchData",()=>{const e=W(),n=ie(),l=J();n.getUserData();let s=h(""),r=h(""),o=h(""),i=h([]),_=h([]),m=h(!1),p=h(!1),b=()=>{l.history===!0?e.history.push({message_content:s.value,bot_answer:""}):i.value.push({question:s.value,text:""})},V=f=>{if(l.history===!0)if(e.history.length>0){const v=e.history.length-1;e.history[v].bot_answer=f.data.completed_content,e.history[v].id=f.data.message_id}else e.history.push({message_content:s.value,bot_answer:f.data.completed_content,id:f.data.message_id});else if(i.value.length>0){const v=i.value.length-1;i.value[v].text=f.data.completed_content,i.value[v].id=f.data.message_id}else i.value.push({question:s.value,text:f.data.completed_content,id:f.data.message_id})},x=()=>{l.history===!0?e.history.pop():i.value.pop()};function H(f){let v=e.history.findIndex($=>$.id===f);v!==-1&&e.history.splice(v,1)}function y(f){let v=i.value.findIndex($=>$.id===f);v!==-1&&i.value.splice(v,1)}function q(){if(p.value=!0,s.value){m.value=!0;let f={message:s.value};b(),s.value="";let v=T.get("jwt");j.post("https://impactstudio.pythonanywhere.com/api/service/chat_completion/",f,{withCredentials:!0,headers:{Authorization:`Bearer ${v}`}}).then($=>{V($),o.value=""}).catch($=>{x(),o.value=$.response?$.response.data.error:"خطأ غير متوقع"}).finally(()=>{m.value=!1,p.value=!1,s.value="",r.value=""})}else o.value="الرجاء إدخال النص"}function re(){if(p.value=!0,s.value){m.value=!0,i.value.push({question:s.value,text:""});let f=new FormData;f.append("file",r.value);let v={"Content-Type":"multipart/form-data"},$=T.get("jwt");$&&(v.Authorization=`Bearer ${$}`),r.value.name&&(v["Content-Disposition"]=`attachment; filename=${r.value.name}`);let R="https://impactstudio.pythonanywhere.com/api/service/HandleFile/"+s.value+"/";s.value="",r.value="",j.post(R,f,{withCredentials:!0,headers:v}).then(F=>{if(i.value.length>0){const he=i.value.length-1;i.value[he].text=F.data.response}else i.value.push({question:s.value,text:F.data.response});o.value=""}).catch(F=>{i.value.pop(),o.value=F.response?F.response.data.detail:"خطأ غير متوقع"}).finally(()=>{m.value=!1,s.value="",r.value="",p.value=!1})}else o.value="الرجاء إدخال النص"}function de(){let f=T.get("jwt");j.delete("https://impactstudio.pythonanywhere.com/api/user/delete_chat_history/",{withCredentials:!0,headers:{Authorization:`Bearer ${f}`}}).then(()=>{i.value=[],e.history=[]}).catch(v=>{G.fire({icon:"error",title:"خطأ!",text:"حدث خطأ أثناء معالجة الطلب"})})}function ue(f){if(f){let v=parseInt(f),$=T.get("jwt");j.delete(`https://impactstudio.pythonanywhere.com/api/user/delete_message/${v}/`,{withCredentials:!0,headers:{Authorization:`Bearer ${$}`}}).then(R=>{l.history?H(v):y(v)}).catch(R=>{console.log(R)})}}return{sendRequest:q,sendRequestWithFile:re,deleteAllChat:de,deleteChat:ue,userCurrentData:i,question:s,file:r,loading:m,chatError:o,disableSend:p,history:_}}),Fe={class:"d-inline position-relative"},Ue={for:"btn-upload"},Ee={__name:"FileUpload",setup(e){let{files:n,open:l,reset:s,onChange:r}=xe({accept:"application/pdf",multiple:!1});const o=L(),i=E();function _(){s(),o.file=""}return O(()=>{o.file===""&&s()}),r(()=>{n.value&&n.value.length>0&&(o.file=n.value[0])}),M(le),(m,p)=>(c(),d("div",Fe,[a("div",null,[t(n)?(c(),S(qe,{key:0,files:t(n),onDeleteFile:p[0]||(p[0]=b=>_())},null,8,["files"])):g("",!0)]),a("label",Ue,[a("input",{type:"button",id:"btn-upload",onClick:p[1]||(p[1]=b=>t(l)())}),u(t(C),{name:"ri-file-upload-line",class:k(["upload-icon",[{"active-file":t(n)},{light:!t(i)}]]),scale:"2"},null,8,["class"])])]))}},Le=w(Ee,[["__scopeId","data-v-5f44ebfc"]]),A=B("ToggleSidebar",()=>{let e=h(!1);function n(){e.value=!e.value}return{ToggleSidebar:n,showSidebar:e}}),Ae={key:0,class:"error-msg"},Ne=["disabled"],Re={__name:"SendMessage",setup(e){const n=A(),l=L();let s=h("");O(()=>{s.value=l.chatError});function r(){n.showSidebar=!1}const o=E();return M(le,Ie),(i,_)=>(c(),d("section",{onClick:_[3]||(_[3]=m=>r()),class:k(["form-contanier d-flex flex-row justify-content-center align-items-center",{light:!t(o)}])},[a("form",{onSubmit:_[2]||(_[2]=X(m=>t(l).file?t(l).sendRequestWithFile():t(l).sendRequest(),["prevent"])),class:"d-flex flex-row justify-content-center align-items-center p-1"},[u(Le),t(s)?(c(),d("div",Ae,[a("p",null,I(t(s)),1)])):g("",!0),ae(a("textarea",{onClick:_[0]||(_[0]=m=>t(l).chatError=""),name:"input",type:"text",placeholder:"يُرجى إدخال طلبك هنا","onUpdate:modelValue":_[1]||(_[1]=m=>t(l).question=m),class:k([{warning:t(s)!==""},{light:!t(o)}])},null,2),[[ne,t(l).question]]),a("button",{class:"btn",disabled:!t(l).question||t(l).disableSend},[u(t(C),{name:"md-send",class:"send-icon",scale:"2"})],8,Ne)],32)],2))}},Xe=w(Re,[["__scopeId","data-v-a03d5f5c"]]),ce=B("ModalToggleEdit",()=>{let e=h(""),n=h(!1);function l(o){e.value=o}function s(){n.value=!0}function r(){n.value=!1}return{getId:l,showHeaderModal:s,hideHeaderModal:r,show:e,showEditHeader:n}}),Q=e=>(D("data-v-48101f84"),e=e(),z(),e),Ye={class:"setting-toogle d-flex justify-content-evenly flex-column p-2"},Ge={key:0},Ke={key:1},Oe=Q(()=>a("p",null,"المظهر",-1)),Pe=Q(()=>a("p",null,"حذف السجل",-1)),We=Q(()=>a("p",null,"تسجيل الخروج",-1)),Je={__name:"UserSetting",setup(e){M(Te,ze,$e,Se);const n=L(),l=E(),s=me();let r=Ce(l),o=()=>{G.fire({title:"تأكيد تسجيل الخروج",text:"هل أنت متأكد أنك تريد تسجيل الخروج؟",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم",cancelButtonText:"لا",confirmButtonColor:"#e74c3c",reverseButtons:!0}).then(_=>{_.isConfirmed&&(T.remove("jwt"),s.push("/serives"))})},i=()=>{G.fire({title:"تأكيد حذف جميع المحادثات",text:"هل أنت متأكد أنك تريد حذف جميع المحادثات؟",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم، احذف الكل",cancelButtonText:"لا، إلغاء",reverseButtons:!0,confirmButtonColor:"#e74c3c"}).then(_=>{_.isConfirmed&&n.deleteAllChat()})};return(_,m)=>(c(),d("div",Ye,[a("div",{class:"mode-toggle d-flex align-items-center p-2",onClick:m[0]||(m[0]=p=>t(r)())},[t(l)?(c(),d("span",Ge,[u(t(C),{name:"md-lightmode-round",class:"ms-3"})])):(c(),d("span",Ke,[u(t(C),{name:"ri-moon-clear-fill",class:"ms-3"})])),Oe]),a("div",{class:"delete-all-chat d-flex align-items-center p-2",onClick:m[1]||(m[1]=p=>t(i)())},[u(t(C),{name:"md-delete-twotone",scale:"1",class:"ms-3"}),Pe]),a("div",{class:"log-out d-flex align-items-center p-2",onClick:m[2]||(m[2]=(...p)=>t(o)&&t(o)(...p))},[u(t(C),{name:"md-logout",scale:"1",class:"ms-3"}),We])]))}},Qe=w(Je,[["__scopeId","data-v-48101f84"]]),Ze={class:"user-logo d-flex justify-content-center align-items-center ms-3"},et={class:"user-name"},tt={__name:"UserName",props:{show:{type:Boolean,default:!1}},setup(e){let n=e,l=ie(),s=h(""),r=h(""),o=h(""),i=h(!1);const _=h(null);l.UserName&&l.email&&(s.value=l.UserName,r.value=l.email,o.value=r.value.slice(0,2));let m=()=>{i.value=!i.value};return be(_,()=>i.value=!1),(p,b)=>(c(),d("div",{class:"name-parent d-flex justify-content-right align-items-center",ref_key:"target",ref:_,onClick:b[1]||(b[1]=V=>t(m)())},[a("span",Ze,I(t(o)),1),a("span",et,I(t(s)),1),u(oe,null,{default:U(()=>[t(i)&&t(n).show?(c(),S(Qe,{key:0,onClick:b[0]||(b[0]=X(()=>{},["stop"]))})):g("",!0)]),_:1})],512))}},K=w(tt,[["__scopeId","data-v-d3f7ce99"]]),st=e=>(D("data-v-68bad7ce"),e=e(),z(),e),at=st(()=>a("span",{class:"ms-2"}," خطط الأسعار ",-1)),nt={__name:"UpgradePlans",setup(e){return M(pe),(n,l)=>{const s=fe("RouterLink");return c(),S(s,{to:"/prices",class:"upgrade-cont text-decoration-none text-white d-flex"},{default:U(()=>[at,u(t(C),{name:"bi-stars",scale:"1.5"})]),_:1})}}},ot=w(nt,[["__scopeId","data-v-68bad7ce"]]),lt=e=>(D("data-v-955b4661"),e=e(),z(),e),it={class:"px-2 py-3 mt-1 d-flex justify-content-center"},ct=lt(()=>a("span",{class:"ms-4"}," محادثة جديدة ",-1)),rt={__name:"NewChat",setup(e){return M(ve),(n,l)=>(c(),d("section",it,[ct,u(t(C),{name:"bi-chat-left-dots",scale:"1.5",class:"new-message"})]))}},dt=w(rt,[["__scopeId","data-v-955b4661"]]),ut={},ht=e=>(D("data-v-3836e26e"),e=e(),z(),e),_t={class:"px-2 py-3 mt-1 d-flex justify-content-center"},mt=ht(()=>a("span",{class:"ms-4 my-4"},"المعرفة المجتمعية",-1)),pt=[mt];function ft(e,n){return c(),d("section",_t,pt)}const vt=w(ut,[["render",ft],["__scopeId","data-v-3836e26e"]]),gt=e=>(D("data-v-31d97877"),e=e(),z(),e),yt={class:"px-2 py-3 mt-1 d-flex justify-content-center"},wt=gt(()=>a("span",{class:"ms-4"}," سجل المحادثه",-1)),xt={__name:"ChatHistory",setup(e){return M(De),(n,l)=>(c(),d("section",yt,[wt,u(t(C),{name:"md-history",scale:"1.5",class:"history"})]))}},$t=w(xt,[["__scopeId","data-v-31d97877"]]),Ct=e=>(D("data-v-b9cc10ad"),e=e(),z(),e),bt={class:"history-container"},kt={class:"mb-2"},Ht=Ct(()=>a("hr",null,null,-1)),Mt={class:"position-fixed bottom-0 mb-4 mt-2"},St={__name:"SideBar",setup(e){const n=A(),l=W(),s=J();return M(He),(r,o)=>(c(),d("section",bt,[t(n).showSidebar?(c(),d("span",{key:0,class:"cancel-btn",onClick:o[0]||(o[0]=i=>t(n).ToggleSidebar())},[u(t(C),{name:"io-close",class:"cancel-icon"})])):g("",!0),a("div",kt,[u(vt)]),Ht,a("div",{class:"new-chat-cont mb-2",onClick:o[1]||(o[1]=(...i)=>t(s).showChat&&t(s).showChat(...i))},[u(dt)]),a("div",{class:"old-chat-cont mb-2",onClick:o[3]||(o[3]=(...i)=>t(s).showHistory&&t(s).showHistory(...i))},[u($t,{onClick:o[2]||(o[2]=i=>t(l).getHistory())})]),u(ot),a("div",Mt,[u(K,{show:""})])]))}},Dt=w(St,[["__scopeId","data-v-b9cc10ad"]]),zt={class:"header"},It={__name:"ModalHeader",setup(e){const n=A();return M(ke),(l,s)=>(c(),d("header",zt,[u(t(C),{name:"co-hamburger-menu",scale:"2",onClick:s[0]||(s[0]=r=>t(n).ToggleSidebar())})]))}},Tt=w(It,[["__scopeId","data-v-6030a1b9"]]),jt=e=>(D("data-v-2207d546"),e=e(),z(),e),Bt={class:"modal-content container d-flex justify-content-center align-items-center flex-column"},Vt=jt(()=>a("div",{class:"modal-header"},[a("h2",null,"إعادة تسمية هذه المحادثة")],-1)),qt={class:"modal-body d-flex justify-content-center align-items-center"},Ft={class:"modal-footer d-flex justify-content-between"},Ut={__name:"ModalEditHeader",props:["chatHeader"],setup(e){const n=ce(),l=L(),s=()=>{l.updateHeader(),n.hideHeaderModal()};return(r,o)=>(c(),d("div",{class:"modal-parent d-flex justify-content-center align-items-center",onClick:o[3]||(o[3]=X((...i)=>t(n).hideHeaderModal&&t(n).hideHeaderModal(...i),["self"]))},[a("div",null,[a("div",Bt,[Vt,a("div",qt,[a("form",{onSubmit:X(s,["prevent"]),class:"d-flex justify-content-center align-items-center"},[ae(a("input",{type:"text",class:"px-1 py-2","onUpdate:modelValue":o[0]||(o[0]=i=>t(l).newHeader=i)},null,512),[[ne,t(l).newHeader]])],32)]),a("div",Ft,[a("button",{type:"button",class:"btn btn-secondary",onClick:o[1]||(o[1]=(...i)=>t(n).hideHeaderModal&&t(n).hideHeaderModal(...i))}," إلغاء "),a("button",{type:"button",class:"btn btn-primary",onClick:o[2]||(o[2]=i=>s())}," حفظ ")])])])]))}},Et=w(Ut,[["__scopeId","data-v-2207d546"]]),Lt={},At=e=>(D("data-v-a4002af7"),e=e(),z(),e),Nt={class:"d-flex justify-content-center align-items-center"},Rt=At(()=>a("div",{class:"loader"},null,-1)),Xt=[Rt];function Yt(e,n){return c(),d("section",Nt,Xt)}const Gt=w(Lt,[["render",Yt],["__scopeId","data-v-a4002af7"]]),Kt={class:"delete-parent"},Ot={__name:"DeleteMessage",setup(e){const n=E();return M(Me),(l,s)=>(c(),d("span",Kt,[u(t(C),{name:"md-deleteoutline-twotone",scale:"1.25",class:k(["delete",{light:!t(n)}])},null,8,["class"])]))}},se=w(Ot,[["__scopeId","data-v-6c7e5c9f"]]),N=e=>(D("data-v-1e9af77f"),e=e(),z(),e),Pt={key:0,class:"no_response"},Wt={class:"user-question"},Jt={class:"chat-answer"},Qt={class:"chat-logo"},Zt=N(()=>a("img",{src:P,alt:"chat-logo"},null,-1)),es={key:0,class:"image-continer d-flex justify-content-center align-items-center"},ts=["src"],ss={key:1,class:"no_history"},as=N(()=>a("div",null,[a("img",{src:P,alt:"logo"})],-1)),ns=N(()=>a("h1",null,"لا يوجد سجل سابق",-1)),os=[as,ns],ls={class:"user-question"},is={class:"chat-answer"},cs={class:"chat-logo"},rs=N(()=>a("img",{src:P,alt:"chat-logo"},null,-1)),ds=N(()=>a("span",{class:"last"},null,-1)),us={__name:"ChatBody",setup(e){const n=A(),l=ce(),s=L(),r=W(),o=J();let i=h([]),_=h([]),m=h(!1);const p=E();Y(()=>o.count,(x,H)=>{x>H&&(i.value=[],s.userCurrentData=[],i.value=s.userCurrentData)},{immediate:!0}),Y(()=>s.userCurrentData,(x,H)=>{x.value<=0?i.value=[]:i.value=s.userCurrentData},{immediate:!0}),Y(()=>r.history,(x,H)=>{x.length<=0?_.value=[]:_.value=r.history},{immediate:!0}),O(()=>{m.value=s.loading,_.value=r.history,b()});function b(){const x=document.querySelector(".last");x&&x.scrollIntoView()}let V=x=>{s.deleteChat(x)};return ge(()=>{b()}),(x,H)=>(c(),d("section",{class:k(["parent",{light:!t(p)}])},[u(Tt),t(i).length<=0&&t(o).newChat?(c(),d("div",Pt)):g("",!0),u(te,{name:"fade"},{default:U(()=>[t(o).showChat?(c(!0),d(Z,{key:0},ee(t(i),y=>(c(),d("section",{class:"py-1",onClick:H[0]||(H[0]=q=>t(n).showSidebar=!1)},[a("article",Wt,[u(K),a("p",{class:k(["user-question-text",{"text-light":!t(p)}])},I(y.question),3)]),a("article",Jt,[a("div",Qt,[Zt,a("span",{class:k(["chat-name",{"text-light":!t(p)}])},"المعرفة المجتمعية",2),y.id?(c(),S(se,{key:0,onClick:q=>t(V)(y.id)},null,8,["onClick"])):g("",!0)]),y.image?(c(),d("div",es,[a("img",{src:y.image,alt:"response image"},null,8,ts)])):g("",!0),y.text?(c(),d("p",{key:1,class:k(["text",{"text-light":!t(p)}])},I(y.text),3)):g("",!0)])]))),256)):g("",!0)]),_:1}),t(_).length<=0&&t(o).history?(c(),d("div",ss,os)):g("",!0),u(te,{name:"fade"},{default:U(()=>[t(o).history?(c(!0),d(Z,{key:0},ee(t(_),y=>(c(),d("section",{class:"py-1",onClick:H[1]||(H[1]=q=>t(n).showSidebar=!1),key:y.id},[a("article",ls,[u(K),a("p",{class:k(["user-question-text",{"text-light":!t(p)}])},I(y.message_content),3)]),a("article",is,[a("div",cs,[rs,a("span",{class:k(["chat-name",{"text-light":!t(p)}])},"المعرفة المجتمعية",2),y.id?(c(),S(se,{key:0,onClick:q=>t(V)(y.id)},null,8,["onClick"])):g("",!0)]),y.bot_answer?(c(),d("p",{key:0,class:k(["text",{"text-light":!t(p)}])},I(y.bot_answer),3)):g("",!0)])]))),128)):g("",!0)]),_:1}),t(m)?(c(),S(Gt,{key:2,class:"mb-5"})):g("",!0),(c(),S(ye,{to:"#app"},[t(l).showEditHeader?(c(),S(Et,{key:0})):g("",!0)])),ds],2))}},hs=w(us,[["__scopeId","data-v-1e9af77f"]]),_s={class:"model-container"},ms={key:0,class:"aside-container container d-block"},ps={class:"body-container d-flex flex-column"},fs={__name:"ModelView",setup(e){const n=A();return(l,s)=>(c(),d("section",_s,[u(oe,{name:"insert"},{default:U(()=>[t(n).showSidebar?(c(),d("aside",ms,[u(Dt)])):g("",!0)]),_:1}),a("section",ps,[(c(),S(we,null,[u(hs)],1024)),u(Xe,{class:"col-12 align-self-end"})])]))}},ws=w(fs,[["__scopeId","data-v-92af1a81"]]);export{ws as default};
