import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';


const { expect } = chai;

chai.use(chaiHttp);

describe('User gets weather details', function(){
  this.timeout(10000);

  it('should get the current weather for the city and country code', (done) => {
    chai.request(server)
      .get('/api/v1/current-weather?cityName=lagos&countryCode=ng')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.all.keys('date', 'mainWeather', 'countryCode', 'moreData',
        'city', 'description', 'highTemp', 'icon', 'id', 'lowTemp');
        done();
      });
  });

  it('should return a status code of 500 if city does not exit', (done) => {
    chai.request(server)
      .get('/api/v1/current-weather?cityName=112&countryCode=ng')
      .end((error, res) => {
        expect(res).to.have.status(500);
        expect(res.body).to.have.keys('error');
        done();
      });
  });

  it('should return a status code of 404 page does not exit', (done) => {
    chai.request(server)
      .get('/api/v1/current-weath?cityName=112&countryCode=ng')
      .end((error, res) => {
        console.log(res.body);
        expect(res).to.have.status(404);
        expect(res.body).to.have.keys('error');
        done();
      });
  });
});

