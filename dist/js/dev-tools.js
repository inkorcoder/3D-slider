(function() {
  var addControl, block, blockHeight, c, cacheHoverColor, counter, counterStyle, createGridLayer, createLinkToFile, file, files, filesBlock, getClassOfLink, getColorOfLink, getHeight, getImageOfLink, gridBlock, gridColor, i, images, linkStyle, linkStyleHover, renameHref, renameStr, str, style, sumStyle, sums, sumsBlock, unbindEvent, _i, _j, _len, _len1;

  files = ["D:\\node\\works\\grid-pro\\dist\\index.html", "D:\\node\\works\\grid-pro\\dist\\css\\grid.min.css", "D:\\node\\works\\grid-pro\\dist\\css\\skin.min.css", "D:\\node\\works\\grid-pro\\dist\\css\\full\\grid.css", "D:\\node\\works\\grid-pro\\dist\\css\\full\\skin.css", "D:\\node\\works\\grid-pro\\dist\\js\\dev-tools.js", "D:\\node\\works\\grid-pro\\dist\\js\\main.js", "D:\\node\\works\\grid-pro\\dist\\js\\script.js", "D:\\node\\works\\grid-pro\\dist\\js\\vendor\\html5shiv.js", "D:\\node\\works\\grid-pro\\dist\\js\\vendor\\jquery-2.1.0.min.js", "D:\\node\\works\\grid-pro\\dist\\js\\vendor\\minify.min.js", "D:\\node\\works\\grid-pro\\dist\\js\\vendor\\modernizr-2.7.1.min.js", "D:\\node\\works\\grid-pro\\dist\\js\\vendor\\no-hover.min.js"];

  renameHref = function(str) {
    str = str.replace(/\\/gim, '/');
    return '/' + str.substring(str.indexOf('dist') + 5);
  };

  renameStr = function(str) {
    str = str.replace(/\\/gim, '/').replace(/(js\/|css\/|vendor\/|full\/)/gim, '<span style="color:#fff;">$1</span>');
    return str.substring(str.indexOf('dist') + 5);
  };

  images = {
    html: "<img style='width:40px;' src='data:image/png;base64,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'/>",
    css: "<img style='width:40px;' src='data:image/png;base64,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'/>",
    js: "<img style='width:40px;' src='data:image/png;base64,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'/>",
    other: "<img style='width:40px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABbCAYAAADk1gJuAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAADZ0lEQVR42uydvU4UURiGHyerjUY7f2pjr8ZKbTQCdyBr70XoDWht4g0YG1piIhT+JNoaG6MWFIoxwu7sAAtrxCDEYs/g7MDMnJ/dAeF9k9PBbObhe8/3fmcmy5HJycm7wHUgRnLRcSBpADeBO+LhpXYEzImDt75EwIo4eGspAlri4K0kAhbEwVsLsnCYOhHQAbbEwt/CMZCIhb+F14FVsfC3MEBbLLy0kgJcFAtnrQJxClCd2F1dYFkVGDCFAKQAf4iHs1pZgLKwu+IsQM3DgRbWHugRorMAu+LhrHYW4JLGOWctZwH20DMRVy1mAaJ5OKwLqxO7afsAJsp3FclKHbMGACpM2ysBNvMAlQXttV1ssnBAB5aFAw8S8gB1Kh1o4Va6MUp2czBAIxeke8CpYX/a1NTUntxls9ms1cJrGufCLKx90F7tIoA61qrW7zKACtPVSnvFrgAVpu3s+6sIoMK03UECRQB1pOXQgWXhwDlYFh4BwI74hFk4xjwwlvwqsGdGOskToDpxtQamtUYdAEd4KlK3NqtyoDpxuZbInVhFVR6XdszB61UAFabL52CqAC6LU6FaNgDVhS1DtPbAwAxYBFCn0sVasAGYKMqEWbirQ4WwJpLmHclzD1QnLg/SVgAVpnfPx4ktQDWRneq4VKCyoGVfkIUDOrAsHNiBywDqJSPLolKMGVEFDrxAIxX3hagk82icC7Cw9sGdil0BqhMHxBg1kkH9pOCcNHLdNA/xGNeVhf3VpuAb7mRhOxU+5pCF7SsQWXjIIboKoIL04GDhDLCNHnEGWXgNvWwZZOEtjXNhFlaU+afEF6A6cX+Mi30B6uFS/2y06wtQYbr/Wu8fX4AfDjm8b8Cjsh9oVFxgFjhG/z/eTJh18YDb9YW57xnge9UvNCwuugG8NusecA4YN+sWcPo/h/YReG6AvS2zqy/A3fbFJ2YBXMkAveZ5zTq1lqmyWWNTbw3jZt+Z9QA4CdwwMCeA8wehykYNML+HTJsFcMGAHDdgT9QErAe8NMBmQqusToB5zZn1GDhqmlFanZeG/FmfclW2Ucdfqs79KtuM7gNngTEDdAw441FlrzJVNr8Xe8NebviLwFOzAC5notJVU7F5fc5U2Zu6qmy/AszrvVkPM83otqnMaeAZ8HW/tfS/AwDXuP7S/7MwLQAAAABJRU5ErkJggg=='/>",
    htmlSmall: "<img style='width:24px;vertical-align:middle;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAFlUlEQVR42uyZS08bVxSAP8bP4OBhHIxxE2hTUkXkQRIwUsUmrVKxapddoCrKMll02XSTSNkHVUrUP5BVN4kqRd2gSk2pIiUIJBoSgZJQRHgYcIoNrg34MWN30cH1wIxnxrgEpB7Jkmfm3vH57nncc67risUiqnwPfM3+lxjQsnUhlD34kYMh0+UX5QB/HRCAZSOATWD9AAC8rQQQPyAxoAuwAawcZIBNYPV/C7xDABlI7HPli0DaCIADYIFVIFN+w6kzwFDu37/PjRs3mJubw+Px1EyrbDbLsWPHuHXrFpcvX640NK66enUAbrebZDJJNpslm83WdGmTySS5XM5sWFxNNoYutArkjWYfOXKEhoaG/8Q3crmclUVJbAfQs0AakPRmS5KE3+/X3Kuvr0cURWRZrlp5RVFoaWnZ8W4rFrAFEAgEEEVRc6+np4f+/n4r5jcUWZbx+/1EIhErFihUAlirVA81Njbi9/sRBIFC4Z/3dHZ2cvXq1b3KQjvSvKAzIG00+9ChQ/h8PhwOR+ne/Pw8qVRq3wCsVwIAEEURl8tVuk6lUqytre0VQNIMwLQvCAaDeL3efwuozc1dBbCd7UIvzTvN6u3t0tzcrNnE4vE4T58+RVEUQ5BisWj4rFAo4HA4EEWR1tbWSj+dtgoQM7NAOUA0GuXOnTuEw2EURTEEUBSFsv5b88ztdnPx4kWuX79uBrC2a4BQKKRxoXQ6zejo6K79o6WlxWzIup4FBAMXkitZwOl01tS5Q6EQp06dsgKwZjUGZINnBAIBJEmivr6+aoULhQK5XK60l7jdbgKBgNm09PZCzghgWa2HvEYWuHnzJsvLy1VZwul0Mjk5yb1795idnbUDoJsdjWJArqTApUuXNAGpKEppNa1IQ0MDDx48KF17PB4rAG+tAqyqBZNklFGy2SyyLCMIAm6323ZvsLq6ysbGhgYgGAzWDKCoDn5Pb8LGxga3b99menoaQRBwOp1EIhGuXbuGIAiWAGZmZjTlh8vlqqkFdpx+bQ/Ahw8fMj4+Xro3PDzMlStX8Pl81rryWExjga0aq1LBagQg2AXw+Xx0dHRoX2Jx5bdkcXGRTCajqXLL6ys7AEYWWDJ6kyAIBAIBXC4X+Xy+lEUEQUCWZRwOB3V1dbo1fz6fZ3Z2lpmZGU3QS5JkBpC3C1BxN5YkCa/XWwKIRqMMDAzQ09NDd3c3zc3NO5r2oaEhHj16xNDQEJOTk5oA3t4k6TVtRjrZtsBWSe3xeEqBGI/HuXv3LocPHyYUCnHixAl6e3s5fvw4L1++ZHBwkKmpKZLJJKlUSlMzeTweGhsbzQAyGJzbVmUBn8+nUUJRFBKJBIlEgrm5OcbGxnj8+DGiKJJIJFhaWqrYzJu4z9Z5VaFmAOfOnaOvr4/h4WEWFxdLrlQOtLCwwMLCQkWtmpqa6Orq4uzZs2YAhkmlTq/EBd4HJgHdgieTyTAxMcHz58959eoVExMTxGIxYrEYKysrmhRZ7iqSJBEKhWhqaqK9vZ2Ojg7Onz9PZ2en2T7wA/CVHYAw8AT4wEpaTKVSvH79mpGREV68eMH09DRv3rwhnU7j9Xppa2ujvb2dkydPEolEOHPmjJWdt1y+A76xAyABPwMRqpClpSWePXtGNBolGAxy4cIF2tradlNxfwsM2ImBrFlrWUnC4TDhcLiWLYNhTAoVAPbTSfWyXQAF+PMgA5ger+yxrFcD8AQYZtsfCu9AxiotplEWKlUNQI+ajT4DPgEce6T0r8Co+v0PtU+xDaDpBIGjwKfAl0A34K+Bsoq6wmPAT8BvwDwW/7O2A7BdWoHPgT7gNPCRjblrwBQwDvyifqpKGrsBKJcPgV7gY9XNTuuMmVPjakRd7VG9Y5J3BVAuR1VrfAF0Ab8Dg6ofz6ouUzP5ewC0My8O3ra5WgAAAABJRU5ErkJggg=='/>",
    cssSmall: "<img style='width:24px;vertical-align:middle;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAFUUlEQVR42uyZXUhbZxjHf8dEjUmd1aZJtNrpQCpEikSF6aBMOkahermrdTAKLfTj0gqFMigUSjsGBe+2y8KgFFbGCoqgZdB2dq0dxlYrurYz2rmaRJlVG2J8dnO65eOck3NirQr7w4G8eT/O83+fj/d53qOICCq6gdNsffwF+N408pI6fmB74PfkRjKBv7cJgVk9AivA0jYg8NKIQGSb+IAmgWUgvJ0JrADz/2tgEwmsAtEtLrwAr/QIsA00MA+8Tv7DrjFAE+Pj4zx48ABFUQBQFAWHw0FeXp6pN+fn52cdG4vFaGlpwePx6A2JqKaepBOR5OdL0cGVK1dEVeGGPjdu3BAD/CIi7mSZ8zQ0ENeivmvXrndiI3a73ag7qkZLXR+YT3eSNygqKtoKPhBJJ2DXIVCaPrOiooLm5uasb1AUhaKiIkSER48eEY2aD2y7d+82sv83Glgz8oEqERmTdWJ4eFjOnDkjNTU1puze5XLJyZMnZWRkJNvSX6XJm0HAJSL3cxF6cXFRbt68KYcOHRKXy2VK8J07d8qxY8fk8ePHZl9zOhsBROSWFcHn5uaku7tbWltbTUeawsJCOXr0qAwNDVndpy/MEPjRzEpPnz6Vs2fPmjYTQJxOpxw5ciQXwUVEXotIuxkC3xmtMjAwIMePHxen02la8LKyMjlx4oQZGzdCWEQ+SpfXni1ZSsbly5c5f/48y8vLlmKfy+UiGo1y6dIllpeXWVlZIakWJxaLEY/H6ejooKurS2+ZV8BCxrlhhcDExIRl4QFCoRDXrl3LOq6pqcmoe0kr1cnTKdlW9XKVjcTevXuzEVhYF4HKysoNE15RFLxer9GQVxmJnI4Jzar5kCO9o7Ozk+rqauLx+L9ZaToKCwux2+0pNp4Oh8NBMBjk4sWLKdlqllNY+9ZEIwqViUhUNhi9vb0pkWrHjh0SDAaNpnyrIaumCc2nJ0wbgfHx8Yx6IYsGXmr9madTtr3caALT09MZZuV2uy0TsJu5/Ur3g9nZWfLz8ykoKKCqqopz585ZJjAzM5PS9ng82Gw2veGrb43A6OgoPT09KU576tQpSktL16WB8vJyo+GrVkwI4E+9lQ4ePJjSXltbIxgMWtbAixcvUto+n89oeNwqAd3TuLGxMXXleJyBgQFThcv09DRXr17l8OHDPHv2zIoGEnoy2a1qoLKyErfbTTj83w3MhQsXuH79OoFAgPr6evx+P/X19dTU1BAKhejv76evr4+enh4WFhY0182igdd697Z2qxrwer3U1dVx+/btFDMaGxtjbGwMAJvNhs/nw+PxEIlEmJqaMlVOGiCcUUrmSqC4uJh9+/alEMjQdyLBzMxMRqTRQl1dHYFAIFu9rRtUFJ0j/31gFHBqdU5NTXHnzh0GBwcZHBzkyZMnLC0tkUgksgpcXFzM/v37aW9vp6WlhdraWioqKrJN+x743AqBcuAuUG3qriMSYWhoiHv37jEyMsLk5CSTk5MsLi5SUFBAQ0MDDQ0NHDhwgLa2NjMCp+MboNMKgVKgD2jK5ZQNh8M8f/6cUCiE1+vF7/dTUlKynoO7C/jaig/E1pNOuN1u3G53tgIl5yt1M+dAbIvdVM9aJZAA5rYzAf0CYnOwlAuBu8Bg+geFTcBDo81UjEo/oARoVqPRJ8DHgO0dCX0LuK/+nlTrFMsEUs4gYA/QBnwGNALvvQVhE+oOPwR+An4GQpj8Zm2FQDqqgHbgU8AP1FqYuwBMAMNAv/rkFDTWQyAZHwCtwIeqmfm1MhDVr35Vd/u+1jXJZhFIxh5VGx1AAPgN6FXt+A/VZN4a/hkAdm9iviqGXJoAAAAASUVORK5CYII='/>",
    jsSmall: "<img style='width:24px;vertical-align:middle;' src='data:image/png;base64,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'/>",
    otherSmall: "<img style='width:24px;vertical-align:middle;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAACuElEQVR42uyZwYsSURzHP7vtTSq8Jctegk4SQiVEp8LoVMeu/QUdgvEgCIIH9SSS/QNC9y4RdJGlS0TKhoin6lAhq+Y6yzKubutmh541ycw4Tx19A31BcJg3w/u83/f93u+92RiPxwg9Ax6jvtrApcnFpunGC/yhz+YLM8CRTwBadgADoO8DgI4TwIFP5oAlwDHQ9TPAAND/R2CNACOgp3jnx4BhB4APIqADQycA1efAgbD6H20tChCLxVy3jUajpNNpdF1H0zRarb9rUrlcdgswmBWBU6+Gr1KpkEqlCAaDFAoFQqGQ7Ct60wBWETCAoOybZ43gJFLVapVkMkkmk6FQKKBpGs1mU8ZC/wBsmKpRgKvAK2DHCwuZFYlEyGazGIZBPB6nVCq5eewp8MTJQoerqodqtRqJRIJAIEA+n5exEE4W6k3n2WVZyCpq9XqdRCJBLpebG2DaQgC7wG2vLWRWOBymWCy6afoIeO5kobXsCxqNhptmJ1ZpfmtWve2FheaMoOEWoO1xR+aVIZIMsyzURk31ZSw0srm3Tgv1rSKwNIAVWejYjYVaXtZDC8gyO9pN4pGCWajjFkAXBVNQMQtZAmzabNs6ClrIdQQm80AlC408B/DYQiMZCwHsK2afU9kItL22jqTO7PrklwgMsTm33Vw0AitSF/jpZwDbpGIHMLCqO1RbA5wAfii2mO3LAgxR65y0LQtwolgE5gLo+nkSnwHf/QywluOVGdtJaYC3wDumPiisQXtOg2l1MmfWRSAK3ADu8vvE7tyKOr0LVMT/T2KfIg1g1nlgG7gDPASuAxeWVKgdiY6+BN4A33D5zVoGYFo7wH3gHhAGrkg8ewh8BGpAWfzmShqLAJh1GbgF3BQ2C1u0+Srm1Xsx2pVllCvLAjBrW0TjAXAN+AC8Fj7+IiyzNP0aAL3U/V9zYJM+AAAAAElFTkSuQmCC'/>"
  };

  cacheHoverColor = '';

  blockHeight = 0;

  getHeight = function() {
    return blockHeight = window.innerHeight - 45;
  };

  getHeight();

  window.addEventListener('resize', getHeight);

  style = "display:none;position:fixed;top:0;left:0; width:100%;background:rgba(0,0,0,.8); z-index:9999;box-sizing:border-box;padding:20px; font-family:Lucida Console,sans-serif;color:#777; text-align:center; height:" + blockHeight + "px;overflow-y:auto;";

  linkStyle = "display:inline-block;color:#111;padding:20px 30px; text-decoration:none;text-align:left; box-shadow:0 0 0 1px #000;margin:0 10px 20px; width:200px;height:70px;vertical-align:top;";

  linkStyleHover = "display:inline-block;color:#111;padding:20px 30px; text-decoration:none;text-align:left; box-shadow:0 0 0 1px #000,0 0 0 4px #fff;margin:0 10px 20px; width:200px;height:70px;vertical-align:top;";

  sumStyle = "display:none;position:fixed;bottom:0px;left:0; width:100%;background:rgba(0,0,0,.8);z-index:9999; box-sizing:border-box;text-align:right; font-family:Lucida Console,sans-serif;color:#fff; border-radius:0px;height:46px;border-top:5px solid #fff;";

  counterStyle = "display:inline-block;box-sizing:border-box; padding: 3px 20px;cursor:pointer; color:#fff;border-radius:0px;text-align:left; line-height:40px;font-size:16px; border-left:1px solid #333;";

  filesBlock = document.createElement('div');

  filesBlock.id = 'dev-files-block';

  filesBlock.setAttribute('style', style);

  filesBlock.style = style;

  document.body.appendChild(filesBlock);

  block = document.getElementById('dev-files-block');

  sumsBlock = document.createElement('div');

  sumsBlock.setAttribute('style', sumStyle);

  sumsBlock.style = sumStyle;

  sumsBlock.id = 'dev-sums-block';

  document.body.appendChild(sumsBlock);

  sumsBlock = document.getElementById('dev-sums-block');

  unbindEvent = function(e) {
    var grid;
    block.style.display = 'none';
    sumsBlock.style.display = 'none';
    grid = document.getElementById('dev-grid-block');
    grid.style.display = 'none';
    document.body.style.overflow = 'auto';
    e.preventDefault();
  };

  document.onkeydown = function(event) {
    var grid;
    if (event.keyCode === 49) {
      document.body.style.overflow = 'hidden';
      block.style.display = 'block';
      sumsBlock.style.display = 'block';
    }
    if (event.keyCode === 50) {
      grid = document.getElementById('dev-grid-block');
      grid.style.display = 'block';
    }
  };

  document.onkeyup = unbindEvent;

  getImageOfLink = function(f) {
    if (renameStr(f).match(/\.html/gim) !== null) {
      return images.html;
    } else if (renameStr(f).match(/\.css/gim) !== null) {
      return images.css;
    } else if (renameStr(f).match(/\.js/gim) !== null) {
      return images.js;
    } else {
      return images.other;
    }
  };

  getColorOfLink = function(f) {
    if (renameStr(f).match(/\.html/gim) !== null) {
      return '#d4826d';
    } else if (renameStr(f).match(/\.css/gim) !== null) {
      return '#699ff6';
    } else if (renameStr(f).match(/\.js/gim) !== null) {
      return '#f2c066';
    } else {
      return '#eee';
    }
  };

  getClassOfLink = function(f) {
    if (renameStr(f).match(/\.html/gim) !== null) {
      return 'html';
    } else if (renameStr(f).match(/\.css/gim) !== null) {
      return 'css';
    } else if (renameStr(f).match(/\.js/gim) !== null) {
      return 'js';
    } else {
      return 'other';
    }
  };

  createLinkToFile = function(f) {
    var l;
    l = document.createElement('a');
    l.href = renameHref(f);
    l.innerHTML = "" + (getImageOfLink(renameStr(f))) + "<br> " + (renameStr(f));
    l.setAttribute('style', linkStyle);
    l.style = linkStyle;
    l.className = "__link " + (getClassOfLink(f));
    l.style.background = getColorOfLink(f);
    l.setAttribute('target', '_blank');
    l.addEventListener('mouseover', function() {
      cacheHoverColor = l.style.background;
      l.setAttribute('style', linkStyleHover);
      l.style = linkStyleHover;
      return l.style.background = cacheHoverColor;
    });
    l.addEventListener('mouseout', function() {
      l.setAttribute('style', linkStyle);
      l.style = linkStyle;
      return l.style.background = cacheHoverColor;
    });
    l.addEventListener('mousedown', function() {
      return setTimeout(function() {
        return unbindEvent();
      }, 1000);
    });
    return block.appendChild(l);
  };

  str = '';

  sums = {
    html: 0,
    css: 0,
    js: 0,
    other: 0
  };

  for (i = _i = 0, _len = files.length; _i < _len; i = ++_i) {
    file = files[i];
    if (file.match(/\.html/gim) !== null) {
      sums.html++;
    } else if (file.match(/\.css/gim) !== null) {
      sums.css++;
    } else if (file.match(/\.js/gim) !== null) {
      sums.js++;
    } else {
      sums.other++;
    }
    createLinkToFile(file);
  }

  sumsBlock.innerHTML = "<span class='dev-counter' id='showHTML'> " + images.htmlSmall + "<b style='margin-left:6px;'>" + sums.html + "</b> </span> <span class='dev-counter' id='showCSS'> " + images.cssSmall + "<b style='margin-left:6px;'>" + sums.css + "</b> </span> <span class='dev-counter' id='showJS'> " + images.jsSmall + "<b style='margin-left:6px;'>" + sums.js + "</b> </span> <span class='dev-counter' id='showOther'> " + images.otherSmall + "<b style='margin-left:6px;'>" + sums.other + "</b> </span> <span class='dev-counter' id='showAll'> <b style='color:4aaff6;margin-left:6px;'> Все файлы:" + (sums.html + sums.css + sums.js + sums.other) + " </b> </span>";

  counter = document.body.getElementsByClassName('dev-counter');

  addControl = function(c, i) {
    c.setAttribute('style', counterStyle);
    c.addEventListener('mouseover', function() {
      return c.style.background = '#222';
    });
    c.addEventListener('mouseout', function() {
      return c.style.background = 'transparent';
    });
    return c.onclick = function() {
      var e, m, _j, _k, _l, _len1, _len2, _len3, _len4, _len5, _len6, _m, _n, _o, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      _ref = document.body.getElementsByClassName('__link');
      for (m = _j = 0, _len1 = _ref.length; _j < _len1; m = ++_j) {
        e = _ref[m];
        e.style.display = 'none';
      }
      if (i === 0) {
        _ref1 = document.body.getElementsByClassName('html');
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
          e = _ref1[_k];
          e.style.display = 'inline-block';
        }
      }
      if (i === 1) {
        _ref2 = document.body.getElementsByClassName('css');
        for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
          e = _ref2[_l];
          e.style.display = 'inline-block';
        }
      }
      if (i === 2) {
        _ref3 = document.body.getElementsByClassName('js');
        for (_m = 0, _len4 = _ref3.length; _m < _len4; _m++) {
          e = _ref3[_m];
          e.style.display = 'inline-block';
        }
      }
      if (i === 3) {
        _ref4 = document.body.getElementsByClassName('other');
        for (_n = 0, _len5 = _ref4.length; _n < _len5; _n++) {
          e = _ref4[_n];
          e.style.display = 'inline-block';
        }
      }
      if (i === 4) {
        _ref5 = document.body.getElementsByClassName('__link');
        for (_o = 0, _len6 = _ref5.length; _o < _len6; _o++) {
          e = _ref5[_o];
          e.style.display = 'inline-block';
        }
      }
    };
  };

  for (i = _j = 0, _len1 = counter.length; _j < _len1; i = ++_j) {
    c = counter[i];
    addControl(c, i);
  }

  gridBlock = document.createElement('div');

  gridBlock.id = 'dev-grid-block';

  gridColor = 'rgba(200,20,20,.3)';

  document.body.appendChild(gridBlock);

  gridBlock = document.getElementById('dev-grid-block');

  createGridLayer = function() {
    var clientHeight, clientWidth, gridColumn, gridColumns, gridGutter, gridStyle, gridWidth, s, _k;
    clientHeight = document.body.clientHeight;
    clientWidth = document.body.clientWidth;
    gridWidth = 1140;
    if (clientWidth < gridWidth) {
      gridWidth = clientWidth;
    }
    gridColumns = 12;
    gridColumn = gridWidth / gridColumns;
    gridGutter = 10 * 2;
    s = 'box-shadow:';
    for (i = _k = 0; _k < 12; i = ++_k) {
      s += "" + (i * gridColumn) + "px 0 0 0 " + gridColor + (i < 11 ? ',' : ';');
    }
    gridStyle = "position:fixed;width:" + (gridColumn - gridGutter) + "px;top:0;left:50%; margin-left:-" + (gridWidth / 2 - gridGutter / 2) + "px;height: 100%; background:" + gridColor + ";display:block;z-index:9998; display:none;" + s;
    gridBlock.setAttribute('style', gridStyle);
    gridBlock.style = gridStyle;
  };

  createGridLayer();

  window.onresize = function() {
    var b;
    createGridLayer();
    getHeight();
    b = document.getElementById('dev-files-block');
    return b.style.height = blockHeight;
  };

}).call(this);
