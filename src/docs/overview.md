# 🪄 Custom UI - overview  🪄
&nbsp;  
Cette librairie personnalisée est essentiellement basée sur l'élaboration des composants  react ( **.jsx** , **.tsx** ) **réutilisables** 🚀.  
Ceci pour mettre à disposition de tout autre projet react utilisant le ***webpack*** des *micro frontends*.  
&nbsp;  
Vous y retrouverez donc en guise  d'exemple un composant ( *Sample.tsx* ) avec toute la  documentation y afférente 📄.  
&nbsp;  
&nbsp;  
&nbsp;  
### 🕰️ Gagne en temps   👨🏾‍💻
&nbsp;  
Voici des bouts de code utiles pour gagner en productivité:
&nbsp;  
&nbsp;  
  • Composant react *.tsx* [ **01 fichier** / **styled-components** ]  
```js
  
    import React, { ReactNode } from "react";
    import styled from "styled-components";
  
    type TMonComposant = {
        id: number,
        text: string
    };
  
    const MonComposant: React.FC<TMonComposant> = ({id, text}) => {
        return (
            <MonComposantContainer>
                <p> ID : {id} </p>
                <p> text : {text} </p>
            </MonComposantContainer>
        );
    };
  
    const MonComposantContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;  
  
    export default MonComposant;  
  
  
```
  
&nbsp;  
&nbsp;  
  • Composant react *.tsx* [ **02 fichiers** / **scss** ]  
&nbsp;  
  Dans le fichier .tsx  
```js
  
    import React, { ReactNode } from "react";
    import "MonComposant.styles.scss";
  
    type TMonComposant = {
        id: number,
        text: string
    };
  
    const MonComposant: React.FC<TMonComposant> = ({id, text}) => {
        return (
            <div className="c-mon-composant">
                <p> ID : {id} </p>
                <p> text : {text} </p>
            </div>
        );
    };  
    
    export default MonComposant;  
  
  
```
  Dans le fichier .scss
```css
  
    .c-mon-composant {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }  
   
  
```  
 
&nbsp;  
&nbsp;  
&nbsp;  
### 📐 Spécificité technique  🛠️
&nbsp;  
Pour une bonne prise en main de cette librairie, tout contributeur ou utilisateur 👨🏾‍💻 retrouvera ci-dessous  
les éléments techniques constitutifs du projet:
&nbsp;  
&nbsp;  
   ►  **React js**    👉🏾 [ Aller sur le site 🌐](https://fr.reactjs.org/)  
&nbsp;  
   ►  **Typescript**    👉🏾 [ Aller sur le site 🌐](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
&nbsp;  
   ►  **SASS**    👉🏾 [ Aller sur le site 🌐](https://sass-lang.com/documentation/)  
&nbsp;   
   ►  **Webpack**    👉🏾 [ Aller sur le site 🌐](https://webpack.js.org/concepts/)  
&nbsp;  
   ►  **Material UI**    👉🏾 [ Aller sur le site 🌐](https://mui.com/)  
&nbsp;  
&nbsp;  
&nbsp;  
                    <img src="../assets/images/png/avatar.png" alt= “yel-avatar” height="50"> Hello!! 👋🏾   je suis **@yel446** 
                    retrouve-moi sur    👉🏾 [ github ](https://github.com/yel446) 
