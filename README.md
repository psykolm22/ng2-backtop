# ng2-backtop
Backtop-Angular2 Directive/Component <br/>
This is a Backtop Directive/Component for Angular 2.

# GitHub
Please fell free to declare issues or contribute  : https://github.com/psykolm22/ng2-backtop

# Installation
npm i --save ng2-backtop


# Add it to app.component.html 
* in your app.component.html :
```html
<backtop scrollspeed=600 buttontheme="light"></backtop>
```

* Add BacktopModule in your app.module.ts:
```javascript
import {BacktopModule} from 'ng2-backtop';

@NgModule({
    ...
    import: [..., BacktopModule]
})
```

#Options
Options for Backtop
* Choose speed to scroll top : example : 100(very fast)  -  10000(very slow)
```
  scrollspeed = 600 (default)
```  
* buttontheme CSS Style : choose to ligth or dark or create your own theme based on ng2-backtop.css
```
  buttontheme = ligth
```  

![alt tag](https://github.com/psykolm22/ng2-backtop/tree/master/img/ng2-backtop-dark.gif)
![alt tag](https://github.com/psykolm22/ng2-backtop/tree/master/img/ng2-backtop-light.gif)

#Tested in:
* Chrome
* Firefox
* Safari