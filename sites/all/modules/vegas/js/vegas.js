<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<!-- git web interface version 1.7.3.GIT, (C) 2005-2006, Kay Sievers <kay.sievers@vrfy.org>, Christian Gierke -->
<!-- git core binaries version 1.7.4.1 -->
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta name="generator" content="gitweb/1.7.3.GIT git/1.7.4.1"/>
<meta name="robots" content="index, nofollow"/>
<title>drupalcode.org Git - sandbox/iqbalnurhakim/1623992.git/blob - js/vegas.js</title>
<base href="http://drupalcode.org" />
<link rel="stylesheet" type="text/css" href="/gitweb.css"/>
<link rel="stylesheet" type="text/css" href="/highlight.css"/>
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.js on '7.x-1.x' - RSS feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/rss/refs/heads/7.x-1.x?f=js/vegas.js" type="application/rss+xml" />
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.js on '7.x-1.x' - RSS feed (no merges)" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/rss/refs/heads/7.x-1.x?f=js/vegas.js;opt=--no-merges" type="application/rss+xml" />
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.js on '7.x-1.x' - Atom feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/atom/refs/heads/7.x-1.x?f=js/vegas.js;opt=--no-merges" type="application/atom+xml" />
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.js on '7.x-1.x' - Atom feed (no merges)" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/atom/refs/heads/7.x-1.x?f=js/vegas.js;opt=--no-merges" type="application/atom+xml" />
<link rel="shortcut icon" href="/git-favicon.png" type="image/png" />
</head>
<body>
<div class="page_header">
<a title="git homepage" href="http://drupal.org/"><img src="/git-logo.png" width="72" height="27" alt="git" class="logo"/></a><a href="/">projects</a> / <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git">sandbox/iqbalnurhakim/1623992.git</a> / blob
</div>
<form method="get" action="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git" enctype="application/x-www-form-urlencoded">
<div class="search">
<input name="a" type="hidden" value="search" />
<input name="h" type="hidden" value="refs/heads/7.x-1.x" />
<select name="st" >
<option selected="selected" value="commit">commit</option>
<option value="grep">grep</option>
<option value="author">author</option>
<option value="committer">committer</option>
<option value="pickaxe">pickaxe</option>
</select><sup><a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/search_help">?</a></sup> search:
<input type="text" name="s"  />
<span title="Extended regular expression"><label><input type="checkbox" name="sr" value="1" />re</label></span></div>
</form>
<div class="page_nav">
<a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git">summary</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/shortlog">shortlog</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/log">log</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/commit/refs/heads/7.x-1.x">commit</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/commitdiff/refs/heads/7.x-1.x">commitdiff</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/tree/refs/heads/7.x-1.x">tree</a><br/>
<a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/history/refs/heads/7.x-1.x:/js/vegas.js">history</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob_plain/refs/heads/7.x-1.x:/js/vegas.js">raw</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/HEAD:/js/vegas.js">HEAD</a><br/>
</div>
<div class="header">
<a class="title" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/commit/refs/heads/7.x-1.x">Fixed drupal standard codes</a>
</div>
<div class="page_path"><a title="tree root" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/tree/refs/heads/7.x-1.x">[sandbox/iqbalnurhakim/1623992.git]</a> / <a title="js" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/tree/refs/heads/7.x-1.x:/js">js</a> / <a title="js/vegas.js" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob_plain/refs/heads/7.x-1.x:/js/vegas.js">vegas.js</a><br/></div>
<div class="page_body">
<div class="pre"><a id="l1" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l1" class="linenr">   1</a> (function&nbsp;($){</div>
<div class="pre"><a id="l2" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l2" class="linenr">   2</a> Drupal.behaviors.initVegas&nbsp;=&nbsp;{</div>
<div class="pre"><a id="l3" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l3" class="linenr">   3</a> &nbsp;&nbsp;attach:&nbsp;function&nbsp;(context,&nbsp;settings)&nbsp;{</div>
<div class="pre"><a id="l4" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l4" class="linenr">   4</a> &nbsp;&nbsp;&nbsp;&nbsp;if(settings.vegas.useSlideshow){</div>
<div class="pre"><a id="l5" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l5" class="linenr">   5</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$.vegas('slideshow',settings.vegas.slideshow);</div>
<div class="pre"><a id="l6" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l6" class="linenr">   6</a> &nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div class="pre"><a id="l7" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l7" class="linenr">   7</a> &nbsp;&nbsp;&nbsp;&nbsp;else{</div>
<div class="pre"><a id="l8" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l8" class="linenr">   8</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$.vegas(settings.vegas.background);</div>
<div class="pre"><a id="l9" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l9" class="linenr">   9</a> &nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div class="pre"><a id="l10" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l10" class="linenr">  10</a> &nbsp;&nbsp;&nbsp;&nbsp;if(settings.vegas.useOverlay){</div>
<div class="pre"><a id="l11" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l11" class="linenr">  11</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$.vegas('overlay',settings.vegas.overlay);</div>
<div class="pre"><a id="l12" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l12" class="linenr">  12</a> &nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div class="pre"><a id="l13" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l13" class="linenr">  13</a> &nbsp;&nbsp;}</div>
<div class="pre"><a id="l14" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l14" class="linenr">  14</a> }</div>
<div class="pre"><a id="l15" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l15" class="linenr">  15</a> </div>
<div class="pre"><a id="l16" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js#l16" class="linenr">  16</a> })(jQuery);</div>
</div><div class="page_footer">
<div class="cachetime">Cache Last Updated: Sat Jul 14 18:39:29 2012 GMT</div>
<!--
	Full URL: |/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.js?|
	URL Hash: |3a9861e64847b6178d9b9af428d22390|
-->
<div class="page_footer_text">For more information about this repository, visit the project page at http://drupal.org/sandbox/iqbalnurhakim/1623992</div>
<a class="rss_logo" title="history of js/vegas.js on '7.x-1.x' RSS feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/rss/refs/heads/7.x-1.x?f=js/vegas.js">RSS</a>
<a class="rss_logo" title="history of js/vegas.js on '7.x-1.x' Atom feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/atom/refs/heads/7.x-1.x?f=js/vegas.js">Atom</a>
</div>
<script type="text/javascript" src="/gitweb.js"></script>
</body>
</html>