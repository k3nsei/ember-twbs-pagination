ember-twbs-pagination
================

Ember.js Component for Bootstrap 3 Pagination &amp; Pager components

```hbs
{{ember-twbs-pagination current=2 count=20}}
```

Here's a [demo][1] jsbin, and these are the original Bootstrap Components: [Pagination][2] and [Pager][3].

## Getting Started

Install via Bower, `bower install ember-twbs-pagination --save`, then include in your page, and start using:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Ember Starter Kit</title>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v1.3.0.js"></script>
  <script src="http://builds.emberjs.com/tags/v1.7.0/ember.js"></script>
  
  <script src="https://rawgithub.com/k3nsei/ember-twbs-pagination/master/dist/ember-twbs-pagination.template.js"></script>
  <script src="https://rawgithub.com/k3nsei/ember-twbs-pagination/master/dist/ember-twbs-pagination.js"></script>
  
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
  
  <!-- application.hbs template -->
  <script type="text/x-handlebars">
    {{ember-twbs-pagination count=15 current=5}}
  </script>

  <script>
    var App = Ember.Application.create();
  </script>
</body>
</html>
```

### Available Options
- `pager` -- Switches to the pager component, defaults to `false`
- `hide` -- Hide the component if `count` equals 1, defaults to `false`

#### Required
- `count` -- The number of pages in total, required
- `current` -- The current page number, required

#### Pagination Only
- `countOut` -- The number of page links in the begin and end of whole range
- `countIn` -- The number of page links on each side of current page
- `paginationNext` -- The text to display for pagination next button
- `paginationPrevious` -- The text to display for pagination previous button
- `paginationSize` -- The size of the element, default is '', available options include `lg` and `sm`.

#### Pager Only
- `pagerNext` -- The text to display for the pager next button
- `pagerPrevious` -- The text to display for the pager previous button
- `pagerSpread` -- Pager buttons spaced out, defaults to false

By default the first page is `1`, and the last is the value of `count`, you can change these by setting `firstPage` and `lastPage`.

[1]: http://emberjs.jsbin.com/panete/5/
[2]: http://getbootstrap.com/components/#pagination
[3]: http://getbootstrap.com/components/#ember-twbs-pagination