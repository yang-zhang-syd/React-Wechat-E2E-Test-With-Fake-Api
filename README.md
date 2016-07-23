# Fake-Api-With-ExpressJs

When developing a web application, we usually do not have a working backend or the backend is 
provided by third party. It would be handy if we can quickly build up a fake backend to 
facilitate front end development. 

The fake backend can also be used on front end testing. The benefit of this is to decouple your
frontend tests from backend implementations, especially database system. Then, you can easily 
and repeatedly test edge cases without bothering with database or setup/config backend for testing.   

I would call this approach Front-end Driven Development. For a small team, this approach has focus on user stories 
and usabilities of applications. When you finished developing frontend, you will have a well defined 
data contract which can be used for backend development. For a larger team, frontend and backend 
can be developed in parallel.

In this example, I will demonstarte building a React web app which depends on a third party api (wechat). The
test framework I am going to use is nightwatch.js. 

### How to run?

1. Install npm packages
```bash
$ npm install
```

2. Install selenium driver
```bash
$ npm run e2e-setup
```

3. Start localhost and fake api
```bash
$ npm start
```

4. Run e2e test
```bash
$ npm run e2e
```
