import{v as k,_ as S,r as u,l as U,a as p,c as f,g as e,D as v,u as s,t as V,d as C,b as x,O as I,q as j,A as b,C as h,M as y,p as q,f as B}from"./index-gwQJKK9p.js";import{u as M,d as N}from"./index-pgLVqRJ6.js";const T=k("FileUpload",()=>{function n(c,l,a){alert("file has been upoaded")}return{submitData:n}}),r=n=>(q("data-v-63370e28"),n=n(),B(),n),$={class:"container d-flex justify-content-center align-items-center"},z={class:"form-upload-cont"},A=r(()=>e("h1",{class:"text-center text-dark"},"اختيار ملف",-1)),R={class:"file"},E=r(()=>e("label",{class:"form-label",for:"customFile"},null,-1)),O={key:0,style:{color:"green","font-size":"20px"}},G={class:"file-name my-2"},H=r(()=>e("label",null,"اسم الملف",-1)),J={class:"date my-2"},K=r(()=>e("label",{for:"date"},"التاريخ",-1)),L={class:"btn-cont d-flex justify-content-center mt-4"},P=["disabled"],Q=r(()=>e("button",{class:"btn btn-primary"},"ارسال",-1)),W={__name:"UploadFile",setup(n){const c=T();let l=u(""),a=u(""),i=u(""),{files:d,open:D,reset:_,onChange:g}=M({accept:"application/pdf",multiple:!1});g(()=>{d.value&&d.value.length>0&&(l.value=d.value[0])});function F(m,t,o){c.submitData(m,t,o),l.value="",a.value="",i.value="",_()}function w(){a.value="",i.value="",l.value="",_()}return U(N),(m,t)=>(p(),f("div",$,[e("div",z,[e("form",{onSubmit:t[4]||(t[4]=v(o=>F(s(l),s(a),s(i)),["prevent"]))},[A,e("div",R,[E,e("button",{class:"form-control",id:"customFile",onClick:t[0]||(t[0]=v(o=>s(D)(),["prevent"]))},[s(l)?(p(),f("p",O,V(s(l).name),1)):C("",!0),x(s(j),{scale:"10",name:"ri-arrow-drop-down-fill",style:I({color:s(l)?"darkgreen":""})},null,8,["style"])])]),e("div",G,[H,b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>y(a)?a.value=o:a=o),type:"text",id:"file-name",class:"form-control p-3",placeholder:"اسم الملف",required:""},null,512),[[h,s(a)]])]),e("div",J,[K,b(e("input",{class:"form-control p-3",type:"date",id:"date",required:"","onUpdate:modelValue":t[2]||(t[2]=o=>y(i)?i.value=o:i=o)},null,512),[[h,s(i)]])]),e("div",L,[e("button",{class:"btn btn-danger mx-5",type:"button",disabled:!s(d),onClick:t[3]||(t[3]=o=>w())}," حذف ",8,P),Q])],32)])]))}},X=S(W,[["__scopeId","data-v-63370e28"]]),Y={class:"parent container d-flex justify-content-center align-items-center"},te={__name:"DashboardView",setup(n){return(c,l)=>(p(),f("section",Y,[x(X)]))}};export{te as default};
