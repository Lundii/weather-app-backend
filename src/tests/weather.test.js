import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';


const { expect } = chai;

chai.use(chaiHttp);

describe('User gets weather details', function(){
  this.timeout(5000);

  it('should get the current weather for the city and country code', (done) => {
    chai.request(server)
      .get('/api/v1/current-weather?cityName=Lagos&countryCode=ng')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.all.keys('date', 'weather', 'main', 'wind');
        done();
      });
  });

  it('should return a status code of 404 if city does not exit', (done) => {
    chai.request(server)
      .get('/api/v1/current-weather?cityName=112&countryCode=ng')
      .end((error, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.keys('errors');
        done();
      });
  });
});

