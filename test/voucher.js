process.env.NODE_ENV = 'test'

let db = require('../models/index');
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = chai.should()

chai.use(chaiHttp)

describe('Vouchers', () => {
    describe('/GET vouchers', () => {
        it('it should GET all the vouchers', (done) => {
            chai.request(server)
            .get('/vouchers')
            .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                done()
            })
        })
    })
    
    describe('/POST vouchers', () => {
        it('it should not POST a voucher', (done) => {
            let voucher = {
                code: "Code36",
                userId: "1"
            }
            chai.request(server)
            .post('/vouchers')
            .send(voucher)
            .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                done()
            })
        })
        it('it should POST a voucher ', (done) => {
            let voucher = {
                code: "Code36",
                userId: "1"
            }
            chai.request(server)
            .post('/vouchers')
            .send(voucher)
            .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('code')
                    res.body.should.have.property('userId')
                done()
            })
        })
    })
    
    describe('/GET/:id voucher', () => {
        it('it should GET a voucher by the given id', (done) => {
            let voucher = {
                code: "Code36",
                userId: "1"
            }
            chai.request(server)
            .get('/vouchers/' + 1)
            .send(voucher)
            .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('code')
                    res.body.should.have.property('userId')
                done()
            })
        })
    })

    describe('/PUT/:id voucher', () => {
        it('it should UPDATE a voucher given the id', (done) => {
            let voucher = {
                code: "Code36",
                userId: "1"
            }
            chai.request(server)
            .put('/vouchers/' + voucher.id)
            .send({code: "Code63", userId: "1"})
            .end((err, res) => {
                    res.should.have.status(200)
                done()
            })
        })
    })

    describe('/DELETE/:id voucher', () => {
        it('it should DELETE a voucher given the id', (done) => {
            let voucher = {
                code: "Code36",
                userId: "1"
            }
            chai.request(server)
            .delete('/vouchers/' + voucher.id)
            .end((err, res) => {
                    res.should.have.status(200)
                done()
            })
        })
    })
})