const router = require('express').Router();

const {
    getAllThoughts,
    getAllThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

router.route('/:userId').post(createThoughts);

router.route('/:thoughtId/reatrions').post(addReaction);

router.route('/:thoughtId/reactions/:reationId').delete(deleteReaction);

module.exports = router;