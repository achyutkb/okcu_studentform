import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import Student from '../models/student.model';

/**
 * Find all the students
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Student.forge()
        .fetchAll()
        .then(student => res.json({
                error: false,
                data: student.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find student by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    student.forge({id: req.params.id})
        .fetch()
        .then(student => {
            if (!student) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: student.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}


// BID
// Advisor_ID
// Dean_ID
// School_ID
// User_ID

/**
 * Store forge student
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    const {BID, Advisor_ID, Dean_ID, School_ID} = req.body;
   
    Student.forge({
        BID, Advisor_ID, Dean_ID, School_ID
    }).save()
        .then(student => res.json({
                success: true,
                data: student.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Update student by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    student.forge({id: req.params.id})
        .fetch({require: true})
        .then(student => student.save({
                BID: req.body.BID || student.get('BID'), 
                Advisor_ID: req.body.Advisor_ID || student.get('Advisor_ID'),
                Dean_ID: req.body.Dean_ID || student.get('Dean_ID'), 
                School_ID: req.body.School_ID || student.get('School_ID'), 
                User_ID: req.body.User_ID || student.get('User_ID')
            })
                .then(() => res.json({
                        error: false,
                        data: student.toJSON()
                    })
                )
                .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        error: true,
                        data: {message: err.message}
                    })
                )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Destroy student by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    student.forge({id: req.params.id})
        .fetch({require: true})
        .then(student => student.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'student deleted successfully.'}
                })
            )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: {message: err.message}
                })
            )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}