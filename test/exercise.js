process.env.NODE_ENV = 'test'

import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'

chai.use(chaiHttp)

describe('GET /api/exercises', () => {
    it('should GET all exercisess', (done) => {
        chai.request(app)
            .get('/api/exercises')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('array')
                expect(res.body).not.have.lengthOf(0)
                done()
            })
    })
})

describe('GET /api/exercise/:id', () => {
    it('should GET a exercise', (done) => {
        chai.request(app)
            .get('/api/exercises/1')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.have.property('exercise')
                expect(res.body.exercise.id).to.equal(1)
                done()
            })
    })
})

describe('POST /api/exercises', () => {
    it('should POST a new exercise', (done) => {
        let exercise = {
            title: 'Title',
            description: 'Description',
            img: 'Image',
            leftColor: 'LeftColor',
            rightColor: 'RightColor'
        }
        chai.request(app)
            .post('/api/exercises')
            .send(exercise)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('object')
                expect(res.body).to.have.property('exercise')
                done()
            })
    })
})