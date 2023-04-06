## 📄 Documentation de sample  
**SampleComponent.tsx** est un composant qui retourne juste le texte qu'on lui passe en paramètre.  
S'il n'y a pas de texte en paramètee il affiche ".. Aucun texte en props ..."

### • Contrat de données  
Le composant **SampleComponent.tsx**  prends en paramètre (props) la structure de donnée suivante:  

```js
     
    {
        text?: string;
    }
      
```  
&nbsp;  

### • Webpack remote  
Dans le fichier **webpack.config.js** --> **plugin** --> **remote** du projet hôte, veuillez utilisez le code ci-dessous:  

```js 

    custom_library: "custom_library@https://remote-library-react-template.vercel.app/remoteEntry.js ";  
      
```  
&nbsp;  

### • Utilisation  
Dans le fichier (jsx / tsx) du projet hôte veuillez utilisez le code ci-dessous: 

   👉🏾 En cas de **lazy loading** (recommandé)
```js
     
    import React, { Suspense } from "react";  
      
    const Sample = React.lazy(() => import("custom_library/Sample"));  
      
   ...  
      
    return (
        <Suspense fallback={<p> no component yet 😝</p>}>
            <Sample text="Bonjour!!" />
        </Suspense>
    )  
    
```  

   👉🏾 En cas de simple importation
```js
     
    import Sample from "custom_library/Sample";  
      
    ...  
      
    return (
        <Sample text="Bonjour!!" />
    ) 
      
```  
