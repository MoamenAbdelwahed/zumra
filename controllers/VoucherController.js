let db = require('../models/index');

exports.create = (req, res) => {
  if(!req.body.code) {
    return res.status(400).send({
      message: "Voucher code can not be empty"
    });
  }
  if(!req.body.userId) {
    return res.status(400).send({
      message: "Voucher user ID can not be empty"
    });
  }

  const voucher = new db.Voucher({
    code: req.body.code,
    userId: req.body.userId,
    isUsed: false
  });
  voucher.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Voucher."
    });
  });
};

exports.findAll = (req, res) => {
  let params = [];
  db.Voucher.findAll({
    include: params
  })
    .then(vouchers => {
      res.status(200).send(vouchers);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Vouchers."
    });
  });
};

exports.findOne = (req, res) => {
  db.Voucher.findByPk(req.params.voucherId)
    .then(voucher => {
      if(!voucher) {
        return res.status(404).send({
          message: "Voucher not found with id " + req.params.voucherId
        });
      }
      res.send(voucher);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Voucher not found with id " + req.params.voucherId
      });
    }
    return res.status(500).send({
      message: "Error retrieving Voucher with id " + req.params.voucherId
    });
  });
};

exports.update = (req, res) => {
  db.Voucher.update(req.body, {
    where: { id: req.params.voucherId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Voucher was updated successfully."
        });
      } else {
        res.send({
          message: `This voucher not found`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating this Voucher"
      });
    });
};

exports.delete = (req, res) => {
  db.Voucher.destroy({
    where: { id: req.params.voucherId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Voucher was deleted successfully!"
        });
      } else {
        res.send({
          message: `This Voucher not found`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete this voucher"
      });
    });
};
