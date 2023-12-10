# Broken App Issues


I redid the entire script. I think the problem may be the req.body.developers bc the req has no body and therefore no developers. I keep getting undefined when I console.log() it. Im not sure how the async d works and there shouldnt be a return statment that early in the function since it will stop it there. The return on an await statement doesn't make sense since the function is asynchronous and returning it after a promise will just stop the function. Instead set it to a variable. Finally, I used a get request bc I presume we are trying to get some data from github and then the res obj is used to display the data.

I need help undestanding the req object in this case also. 