import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import AcademicInfo from '../models/academicinfo.model';
import Student from '../models/student.model';

/**
 * Find all the users
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    AcademicInfo.forge()
        .fetchAll()
        .then(user => res.json({
                error: false,
                data: user.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    AcademicInfo.forge({id: req.params.id})
        .fetch()
        .then(user => {
            if (!user) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: user.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Store forge user
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    const {school_name, degree, major, minor, advisor, dean, old_new_flag,user_id} = req.body;
    
    AcademicInfo.forge({
        school_name, degree, major, minor, advisor, dean, old_new_flag,user_id
    }).save()
        .then(user => res.json({
                success: true,
                data: user.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Update user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    AcademicInfo.forge({id: req.params.id})
        .fetch({require: true})
        .then(user => user.save({
                school_name: req.body.school_name || user.get('school_name'),
                degree: req.body.degree || user.get('degree'),
                major: req.body.major || user.get('major'),
                minor: req.body.minor || user.get('minor'),
                advisor: req.body.advisor || user.get('advisor'),
                dean: req.body.dean || user.get('dean'),
                old_new_flag: req.body.old_new_flag || user.get('old_new_flag'),
                is_approved: req.body.is_approved || user.get('is_approved'),
            })
                .then(() => res.json({
                        error: false,
                        data: user.toJSON()
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


export function advisorApproval(req, res) {
    AcademicInfo.forge({'advisor': req.body.advisor_id,'user_id': req.body.student_id})
            .fetch({require: true})
            .then(academicInfo => academicInfo.save({
                    is_approved: req.body.is_approved || academicInfo.get('is_approved'),
                    updated_at: req.body.updated_at || academicInfo.get('updated_at')

                })
                    .then(() => res.json({
                            error: false,
                            data: academicInfo.toJSON()
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

export function deanApproval(req, res) {
    AcademicInfo.forge({'dean': req.body.dean_id,'user_id': req.body.student_id})
            .fetch({require: true})
            .then(academicInfo => academicInfo.save({
                    is_approved: req.body.is_approved || academicInfo.get('is_approved'),
                    updated_at: req.body.updated_at || academicInfo.get('updated_at')

                })
                    .then(() => res.json({
                            error: false,
                            data: academicInfo.toJSON()
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
 * Destroy user by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    AcademicInfo.forge({id: req.params.id})
        .fetch({require: true})
        .then(user => user.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'Academic Info deleted successfully.'}
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