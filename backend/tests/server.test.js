const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo, STATUS_PENDING} = require('./../models/todo');
const {todos, makeTodos} = require('./seed/todo');

beforeEach(makeTodos);

describe('POST /todos', () => {

    it('should create a new todo', (done) => {
        var task = 'Work on Skillhire test';
        request(app)
            .post('/todos')
            .send({task})
            .expect(200)
            .expect((res) => {
                expect(res.body.task).toBe(task);
            }).
            end((err, res) => {
                if(err) {
                    return done(err); // basically stop the function execution
                }
                Todo.find({task}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].task).toBe(task);
                    expect(todos[0].updatedAt).toBe(null);
                    expect(todos[0].createdAt).toBe(null);
                    expect(todos[0].status).toBe(STATUS_PENDING);
                    done();
                }).catch((err) => done(err));
            });
    });

    it('should not create a new todo with invalid data', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(3); // this is the default we started with
                    done();
                }).catch((err) => done(err));
            });
    });

});