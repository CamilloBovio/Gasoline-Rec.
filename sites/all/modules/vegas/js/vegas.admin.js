<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<!-- git web interface version 1.7.3.GIT, (C) 2005-2006, Kay Sievers <kay.sievers@vrfy.org>, Christian Gierke -->
<!-- git core binaries version 1.7.4.1 -->
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta name="generator" content="gitweb/1.7.3.GIT git/1.7.4.1"/>
<meta name="robots" content="index, nofollow"/>
<title>drupalcode.org Git - sandbox/iqbalnurhakim/1623992.git/blob - js/vegas.admin.js</title>
<base href="http://drupalcode.org" />
<link rel="stylesheet" type="text/css" href="/gitweb.css"/>
<link rel="stylesheet" type="text/css" href="/highlight.css"/>
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.admin.js on '7.x-1.x' - RSS feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/rss/refs/heads/7.x-1.x?f=js/vegas.admin.js" type="application/rss+xml" />
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.admin.js on '7.x-1.x' - RSS feed (no merges)" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/rss/refs/heads/7.x-1.x?f=js/vegas.admin.js;opt=--no-merges" type="application/rss+xml" />
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.admin.js on '7.x-1.x' - Atom feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/atom/refs/heads/7.x-1.x?f=js/vegas.admin.js;opt=--no-merges" type="application/atom+xml" />
<link rel="alternate" title="sandbox/iqbalnurhakim/1623992.git - history of js/vegas.admin.js on '7.x-1.x' - Atom feed (no merges)" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/atom/refs/heads/7.x-1.x?f=js/vegas.admin.js;opt=--no-merges" type="application/atom+xml" />
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
<a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/history/refs/heads/7.x-1.x:/js/vegas.admin.js">history</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob_plain/refs/heads/7.x-1.x:/js/vegas.admin.js">raw</a> | <a href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/HEAD:/js/vegas.admin.js">HEAD</a><br/>
</div>
<div class="header">
<a class="title" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/commit/refs/heads/7.x-1.x">Fixed drupal standard codes</a>
</div>
<div class="page_path"><a title="tree root" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/tree/refs/heads/7.x-1.x">[sandbox/iqbalnurhakim/1623992.git]</a> / <a title="js" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/tree/refs/heads/7.x-1.x:/js">js</a> / <a title="js/vegas.admin.js" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob_plain/refs/heads/7.x-1.x:/js/vegas.admin.js">vegas.admin.js</a><br/></div>
<div class="page_body">
<div class="pre"><a id="l1" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l1" class="linenr">   1</a> jQuery(document).ready(function($){</div>
<div class="pre"><a id="l2" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l2" class="linenr">   2</a> </div>
<div class="pre"><a id="l3" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l3" class="linenr">   3</a> &nbsp;&nbsp;$('.remove-image-file').click(function(e){</div>
<div class="pre"><a id="l4" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l4" class="linenr">   4</a> &nbsp;&nbsp;&nbsp;&nbsp;$(this).parent().parent().remove();</div>
<div class="pre"><a id="l5" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l5" class="linenr">   5</a> &nbsp;&nbsp;&nbsp;&nbsp;if($('div').hasClass('tabledrag-changed-warning')==false){</div>
<div class="pre"><a id="l6" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l6" class="linenr">   6</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('#images-table').before('&lt;div&nbsp;class=&quot;tabledrag-changed-warning&nbsp;messages&nbsp;warning&quot;&nbsp;style=&quot;display:&nbsp;none;&nbsp;&quot;&gt;&lt;span&nbsp;class=&quot;warning&nbsp;tabledrag-changed&quot;&gt;*&lt;/span&gt;&nbsp;Changes&nbsp;made&nbsp;in&nbsp;this&nbsp;table&nbsp;will&nbsp;not&nbsp;be&nbsp;saved&nbsp;until&nbsp;the&nbsp;form&nbsp;is&nbsp;submitted.&lt;/div&gt;');</div>
<div class="pre"><a id="l7" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l7" class="linenr">   7</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('.tabledrag-changed-warning').show('slow');</div>
<div class="pre"><a id="l8" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l8" class="linenr">   8</a> &nbsp;&nbsp;&nbsp;&nbsp;}</div>
<div class="pre"><a id="l9" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l9" class="linenr">   9</a> &nbsp;&nbsp;});</div>
<div class="pre"><a id="l10" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l10" class="linenr">  10</a> </div>
<div class="pre"><a id="l11" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js#l11" class="linenr">  11</a> });</div>
</div><div class="page_footer">
<div class="cachetime">Cache Last Updated: Sat Jul 14 18:39:22 2012 GMT</div>
<!--
	Full URL: |/sandbox/iqbalnurhakim/1623992.git/blob/refs/heads/7.x-1.x:/js/vegas.admin.js?|
	URL Hash: |3e147c027cf2d5da6984f2a93e8c9ffb|
-->
<div class="page_footer_text">For more information about this repository, visit the project page at http://drupal.org/sandbox/iqbalnurhakim/1623992</div>
<a class="rss_logo" title="history of js/vegas.admin.js on '7.x-1.x' RSS feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/rss/refs/heads/7.x-1.x?f=js/vegas.admin.js">RSS</a>
<a class="rss_logo" title="history of js/vegas.admin.js on '7.x-1.x' Atom feed" href="http://drupalcode.org/sandbox/iqbalnurhakim/1623992.git/atom/refs/heads/7.x-1.x?f=js/vegas.admin.js">Atom</a>
</div>
<script type="text/javascript" src="/gitweb.js"></script>
</body>
</html>