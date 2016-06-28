'use strict';

module.exports.onlyOwner = authorizeOnlyToCompanyOwner;
module.exports.onlyMembers = authorizeOnlyToCompanyMembers;
module.exports.onlySelf = authorizeOnlySelf;

// function authorizeOnlyOwner(entity) {
//   return function(req, res, next) {
//     var check = req.resources[entity].owner._id || req.resources[entity].owner;
//
//     if (typeof check !== 'string') {
//       check = check.toString();
//     }
//
//     if (check !== req.user._id.toString()) {
//       return res.status(403).json({ message: 'Unauthorized' });
//     }
//
//     next();
//   }
// };

function authorizeOnlyToCompanyMembers(req, res, next) {
  // check if user is member of company
  const isMember = req.resources.company.members.find((member) => {
    return member.toString() === req.user._id.toString();
  });

  if (!isMember) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  next();
}

function authorizeOnlyToCompanyOwner(req, res, next) {
  const isOwner = req.resources.company.owner.toString() === req.user._id.toString();

  if (!isOwner) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  next();
}

function authorizeOnlySelf(req, res, next) {
  const isSelf = req.resources.user._id.toString() === req.user._id.toString();

  if (!isSelf) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  next();
}
