import fetch from 'node-fetch';

const getRestaurants = (req, res) => {
  fetch('https://remora.staging.saleswhale.com/restaurants')
  .then(res => res.json())
  .then(data => {
    res.send(data)
  })
  .catch(err => {
      res.status(500).json({
        error: error
    })
  })

}

const getSingleRestaurant = async (req, res) => {
  const {id} = req.params;
  fetch(`https://remora.staging.saleswhale.com/restaurants/${id}`)
  .then(res => res.json())
  .then(data => {
    res.send(data)
  })
  .catch(err => {
      res.status(500).json({
        error: error
    })
  })
}

export default {
    getRestaurants, 
    getSingleRestaurant
}