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
    const {BID, catalogYear, addOnly} = req.body;
    // const {school_name, degree, major, minor, advisor_id, dean_id} = req.body;
    const old_new_flag = "new"
    const student_id = req.currentUser.id;

    Student.forge({
        student_id,  BID, catalogYear, addOnly
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

    AcademicInfo.forge({
        school_name:req.body.school_name[0],
        degree : req.body.degree[0],
        major : req.body.major[0],
        minor : req.body.minor[0],
        advisor_id : req.body.advisor_id[0],
        dean_id : req.body.dean_id[0],
        student_id: student_id,
        old_new_flag : "old"
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
            
        
    AcademicInfo.forge({
        school_name:req.body.school_name[1],
        degree : req.body.degree[1],
        major : req.body.major[1],
        minor : req.body.minor[1],
        advisor_id : req.body.advisor_id[1],
        dean_id : req.body.dean_id[1],
        student_id: student_id,
        old_new_flag : "new"
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
                advisor_id: req.body.advisor_id || user.get('advisor_id'),
                dean_id: req.body.dean_id || user.get('dean_id'),
                old_new_flag: req.body.old_new_flag || user.get('old_new_flag'),
                is_advisor_approved: 0,
                is_dean_approved: 0
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
    AcademicInfo.forge({'advisor_id': req.currentUser.id,'student_id': req.body.student_id})
            .fetch({require: true})
            .then(academicInfo => academicInfo.save({
                    is_advisor_approved: req.body.is_advisor_approved || academicInfo.get('is_advisor_approved'),
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
    AcademicInfo.forge({'dean_id': req.currentUser.id,'student_id': req.body.student_id})
            .fetch({require: true})
            .then(academicInfo => academicInfo.save({
                    is_dean_approved: req.body.is_dean_approved || academicInfo.get('is_dean_approved'),
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