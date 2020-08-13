> Some notes about ***responsive*** web pages

There are numerous ways to achieve responsive model in our sites/apps. Responsive model is very important nowadays because of the many different clients(mobile/tablet/desktop ...etc)

1- `Viewport` mechanism in `html` file. **Viewport** is basically what we see in our web site. In mobile environments, mobile phones will try to shrink content, to  provide a smooth experience. Between `head` tags we write `meta` tags.
```html
... 

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

... 
```
2- `Media Queries` in `css` files. We can write _different style_ codes for **different screen sizes**
```css

//resolution 901px and above
@media screen and  (min-width: 901px){
 body {
  background-color: green;
 }
}

//resolution between 400 and 900
@media screen and  (min-width: 400px) and (max-width: 900px) {
 body {
  background-color: red;
 }
}
```
3- `Flexbox`. We can achieve **Responsive behavior** via flexbox.

4- `CSS Grid`. Another handy way to provide responsive web pages.
```css
   div.grid {
				background-color: greenyellow;
				padding: 10px;
				display: grid;
				column-gap: 20px;
				row-gap: 10px;
				grid-template-columns: 100px 1fr 2fr 2fr;
			}
	 
   div.grid-item {
				background-color: burlywood;
				padding: 5px;
				text-align: center;
				margin: 5px;
			}
```

5- A third-party library like `Bootstrap`. It also provides _responsive features_. `Bootstrap` uses ** 12 column ** paradigm which basically divides screen
into 12 columns. Therefore you can easily implement these features.
```html
<div class="container">
        <div class="row">
            <div class="col-3">Container 1</div>
            <div class="col-3">Container 2</div>
            <div class="col-3">Container 3</div>
            <div class="col-3">Container 4</div>
        </div>
</div>

or

<div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-6">Container 1</div>
            <div class="col-lg-3 col-sm-6">Container 2</div>
            <div class="col-lg-3 col-sm-6">Container 3</div>
            <div class="col-lg-3 col-sm-6">Container 4</div>
        </div>
</div>
```
