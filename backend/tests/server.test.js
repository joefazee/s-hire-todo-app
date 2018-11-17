const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo, STATUS_PENDING, STATUS_COMPLETED} = require('./../models/todo');
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



describe('GET /todos', () => {

    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(3);
            }).end(done);
    });
});


describe('PATCH /todos/:id', () => {

    it('should update the todo', (done) => {
        var id = todos[1]._id.toHexString();
        var payload = {task: 'Finish skillhire task', updatedAt: 12345, updatedAt: 12345, status: STATUS_COMPLETED};
        request(app)
            .patch(`/todos/${id}`)
            .send(payload)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.task).toBe(payload.task);
                expect(res.body.todo.updatedAt).toBeA('number');
                expect(res.body.todo.status).toBe(STATUS_COMPLETED);
            }).end(done);

    });

    it('should return 404 for non-object id', (done) => {
        request(app)
            .patch('/todos/123')
            .expect(404)
            .end(done);
    }); 


    it('should set status to pending when todo is not completed', (done) => {

        var id = todos[0]._id.toHexString();
        var payload = {task: 'Work on the task!!!', status: STATUS_PENDING};
        request(app)
            .patch(`/todos/${id}`)
            .send(payload)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.task).toBe(payload.task);
                expect(res.body.todo.status).toBe(STATUS_PENDING);
                expect(res.body.todo.updatedAt).toBeA('number');
            }).end(done);
    });

});