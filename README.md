# John Conway's Game of Life
### Rest in Piece John Conway 1937–2020

This repository is a tribute to the famous mathematician John Horton Conway.

Conway's Game of Life is a single player game in which a set of rules can give birth to unique animations.
Rules:
1. Any live cell with fewer than two live neighbors dies. [Underpopulation]
2. Any live cell with more than three live neighbors dies. [Overcrowding]
3. Any live cell with two or three live neighbors continues to the next generation. [Stable populations]
4. Any dead cells of exactly three live neighbors will come back to life. [Reproduction]

![Screen_shot_2012-03-05_at_8 52 35_PM](https://user-images.githubusercontent.com/57306606/85798209-b1dba180-b702-11ea-8206-824a2f3d5fc6.png)

#### Given these rules we are able to make unique patterns and animations.

![68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f3456565a547654717a5252304255774e49482f67697068792e676966](https://user-images.githubusercontent.com/57306606/85798460-20206400-b703-11ea-8ffa-be23f50271f9.gif)

### Directory Information

Creating this game was quite a bit of fun. Although I will admit it was a tough project figuring how to turn the rules into code. Making helper functions was a breeze and making the grid itself was also intiutive. In school I learned of the UPER. UPER stands for UNDERSTAND, PLAN, EXECUTE, REFLECT. During the understand and plan phase of this project I was writing a bunch of pseduocode. At some point I thought to myself...can't I just turn this into code now? The Vanilla Javascript was the result of this. I did get lost quite often and ran into many bugs and syntax errors. I was trying my best to brush off the rust on my JavaScript skills.

I also wanted to create a more interactive version of this game, hence the React version of Game of Life. In that directory lays a version where the user can populate their own grid, pause, and speed up the animation. You can even populate cells while the animation is playing. 


### Future Versions

Eventually I would like to return to this project. There are still many ways I could refactor my code. Also, I would like to add more features to this game, maybe some presets that show off unique animations. Possibly increase the grid size to fit bigger animations. There's a youtube video that showcases large versions of this game. 
