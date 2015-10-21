# Trojan

#__Trojan.js__

##_Now, you can break into the window and get stuff for free!_

**Okay**, I need `window.MODELS.trojanhorse.leg.0` using only a single string. How do I do it?

`th(".MODELS.trojanhorse.leg.0")`

Trojan was made simple so you can go in for the kill and do it like that.

###**How it works:**

What it does: it gets a value anywhere in the window by using a string.

>*It seems trivial. Why would I want this?*
>
>-My very pessimistic friend

It does sound trivial like a trivial tool, but when you are uploading a JSON file and want to do the same thing, it becomes a weapon of great value.

Let's say you have this `"Frames.json"` file.
```
...
{
	id : 0,
	params : [
		{
		param : ".MODELS.trojanhorse.leg.0",
		value : 0.3
		},
		{
		param : "$screen_overlay.rgb",
		value : [0,1,1]
		}
	]
}
...
```
###**Adding new routes**:
You have new variable, and you don't want to search every time, which as you can imagine, may take some time.
```
th.add("trojanhorse", MODELS.trojanhorse);
```
Now the trojan horse model is in the THDAT you can get it simply by doing:

```
th("$trojanhorse");
```

Now, you can test it out for yourself, and get your data from anywhere in the window using only a string.
