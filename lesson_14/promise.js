
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// ========================================================================================

// function wakeUp(isWokeUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWokeUp) {
//                 console.log('Woke up');
//                 resolve(true);
//             } else {
//                 console.log('You are sleeping');
//                 reject('lazy');
//             }
//         }, 1000);
//     });
// }
//
// function cleanTeeth(isTeethCleaned) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTeethCleaned) {
//                 console.log('Cleaned teeth');
//                 resolve(true);
//             } else {
//                 console.log('Smell from mouth')
//                 reject('fie');
//             }
//         }, 3000);
//     });
// }
//
// function breakfast(isEaten) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isEaten) {
//                 console.log('Ate breakfast');
//                 resolve(true);
//             } else {
//                 console.log('Without breakfast');
//                 reject('hangry')
//             }
//         }, 2000);
//     });
// }
//
// function watchVideoLesson(isWatched) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWatched) {
//                 console.log('Watched video lesson');
//                 resolve(true);
//             } else {
//                 console.log('You are not ready to do your homework');
//                 reject('watch video lesson');
//             }
//         }, 4000);
//     });
// }
//
// function doHomework(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 console.log('Done homework');
//                 resolve(true);
//             } else {
//                 console.log('Watch video lesson one more time');
//                 reject('be more attentive');
//             }
//         }, 4000);
//     });
// }
//
// function dinner(isDined) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDined) {
//                 console.log('Ate dinner');
//                 resolve(true);
//             } else {
//                 console.log('Without dinner');
//                 reject('hungry');
//             }
//         }, 300);
//     });
// }
//
// function watchLecture(isWatched) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWatched) {
//                 console.log('Watched lecture');
//                 resolve(true);
//             } else {
//                 console.log('Missed lecture');
//                 reject('it is a pity)');
//             }
//         }, 800);
//     });
// }
//
// function learnEnglish(isLearn) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isLearn) {
//                 console.log('Learned english');
//                 resolve(true);
//             } else {
//                 console.log('tomorrow learn english');
//                 reject('badly');
//             }
//         }, 2500);
//     });
// }
//
// function takeShower(isWashed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWashed) {
//                 console.log('Took a shower');
//                 resolve(true);
//             } else {
//                 console.log('No water');
//                 reject('you are dirty');
//             }
//         }, 1200);
//     });
// }
//
// function sleep(isSleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isSleep) {
//                 console.log('Good night');
//                 resolve(true);
//             } else {
//                 console.log('No sleep');
//                 reject('read a book')
//             }
//         }, 200);
//     });
// }

// ==================   then   ================

// wakeUp(true)
//     .then(response => {
//         return cleanTeeth(true)
//     })
//     .then(response => {
//         return breakfast(true)
//     })
//     .then(response => {
//         return watchVideoLesson(true)
//     })
//     .then(response => {
//         return doHomework(true)
//     })
//     .then(response => {
//         return dinner(true)
//     })
//     .then(response => {
//         return watchLecture(true)
//     })
//     .then(response => {
//         return learnEnglish(true)
//     })
//     .then(response => {
//         return takeShower(true)
//     })
//     .then(response => {
//         return sleep(true)
//     })

// =========================   async/await   ======================

// async function schedule() {
//     await wakeUp(true);
//     await cleanTeeth(true);
//     await breakfast(true);
//     await watchVideoLesson(true);
//     await doHomework(true);
//     await dinner(true);
//     await watchLecture(true);
//     await learnEnglish(true);
//     await takeShower(true);
//     await sleep(true);
// }
//
// schedule();

// =====================================================================================================

// ===========================    callback    ======================

// function wakeUp(isWokeUp, callback) {
//     setTimeout(() => {
//         if (isWokeUp) {
//             callback(null, 'Woke up');
//         } else {
//             callback('You are sleeping', null);
//         }
//     }, 1000);
// }
//
// function cleanTeeth(isTeethCleaned, callback) {
//     setTimeout(() => {
//         if (isTeethCleaned) {
//             callback(null, 'Cleaned teeth');
//         } else {
//             callback('Smell from mouth', null);
//         }
//     }, 3000);
// }
//
// function breakfast(isEaten, callback) {
//     setTimeout(() => {
//         if (isEaten) {
//             callback(null, 'Ate breakfast');
//         } else {
//             callback('Without breakfast', null);
//         }
//     }, 2000);
// }
//
// function watchVideoLesson(isWatched, callback) {
//     setTimeout(() => {
//         if (isWatched) {
//             callback(null, 'Watched video lesson');
//         } else {
//             callback('You are not ready to do your homework', null);
//         }
//     }, 4000);
// }
//
// function doHomework(isDone, callback) {
//     setTimeout(() => {
//         if (isDone) {
//             callback(null, 'Done homework');
//         } else {
//             callback('Watch video lesson one more time', null);
//         }
//     }, 4000);
// }
//
// function dinner(isDined, callback) {
//     setTimeout(() => {
//         if (isDined) {
//             callback(null, 'Ate dinner');
//         } else {
//             callback('Without dinner', null);
//         }
//     }, 300);
// }
//
// function watchLecture(isWatched, callback) {
//     setTimeout(() => {
//         if (isWatched) {
//             callback(null, 'Watched lecture');
//         } else {
//             callback('Missed lecture', null);
//         }
//     }, 800);
// }
//
// function learnEnglish(isLearn, callback) {
//     setTimeout(() => {
//         if (isLearn) {
//             callback(null, 'Learned english');
//         } else {
//             callback('tomorrow learn english', null);
//         }
//     }, 2500);
// }
//
// function takeShower(isWashed, callback) {
//     setTimeout(() => {
//         if (isWashed) {
//             callback(null, 'Took a shower');
//         } else {
//             callback('No water', null);
//         }
//     }, 1200);
// }
//
// function sleep(isSleep, callback) {
//     setTimeout(() => {
//         if (isSleep) {
//             callback(null, 'Good night');
//         } else {
//             callback('No sleep', null);
//         }
//     }, 200);
// }
//
// wakeUp(true, (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data)
//         cleanTeeth(true, (err1, data1) => {
//             if (err1) {
//                 console.error(err1);
//             } else {
//                 console.log(data1)
//                 breakfast(true, (err2, data2) => {
//                     if (err2) {
//                         console.error(err2);
//                     } else {
//                         console.log(data2)
//                         watchVideoLesson(true, (err3, data3) => {
//                             if (err3) {
//                                 console.error(err3);
//                             } else {
//                                 console.log(data3)
//                                 doHomework(true, (err4, data4) => {
//                                     if (err4) {
//                                         console.error(err4);
//                                     } else {
//                                         console.log(data4)
//                                         dinner(true, (err5, data5) => {
//                                             if (err5) {
//                                                 console.error(err5);
//                                             } else {
//                                                 console.log(data5)
//                                                 watchLecture(true, (err6, data6) => {
//                                                     if (err6) {
//                                                         console.error(err6);
//                                                     } else {
//                                                         console.log(data6)
//                                                         learnEnglish(true, (err7, data7) => {
//                                                             if (err7) {
//                                                                 console.error(err7);
//                                                             } else {
//                                                                 console.log(data7)
//                                                                 takeShower(true, (err8, data8) => {
//                                                                     if (err8) {
//                                                                         console.error(err8);
//                                                                     } else {
//                                                                         console.log(data8)
//                                                                         sleep(true, (err9, data9) => {
//                                                                             if (err9) {
//                                                                                 console.error(err9);
//                                                                             } else {
//                                                                                 console.log(data9)
//                                                                             }
//                                                                         });
//                                                                     }
//                                                                 });
//                                                             }
//                                                         });
//                                                     }
//                                                 });
//                                             }
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

// =============================   setTimeout   ============================

function wakeUp(isWokeUp) {
    setTimeout(() => {
        if (isWokeUp) {
            console.log('Woke up');
            function cleanTeeth(isTeethCleaned) {
                setTimeout(() => {
                    if (isTeethCleaned) {
                        console.log('Cleaned teeth');
                        function breakfast(isEaten) {
                            setTimeout(() => {
                                if (isEaten) {
                                    console.log('Ate breakfast');
                                    function watchVideoLesson(isWatched) {
                                        setTimeout(() => {
                                            if (isWatched) {
                                                console.log('Watched video lesson');
                                                function doHomework(isDone) {
                                                    setTimeout(() => {
                                                        if (isDone) {
                                                            console.log('Done homework');
                                                            function dinner(isDined) {
                                                                setTimeout(() => {
                                                                    if (isDined) {
                                                                        console.log('Ate dinner');
                                                                        function watchLecture(isWatched) {
                                                                            setTimeout(() => {
                                                                                if (isWatched) {
                                                                                    console.log('Watched lecture');
                                                                                    function learnEnglish(isLearn) {
                                                                                        setTimeout(() => {
                                                                                            if (isLearn) {
                                                                                                console.log('Learned english');
                                                                                                function takeShower(isWashed) {
                                                                                                    setTimeout(() => {
                                                                                                        if (isWashed) {
                                                                                                            console.log('Took a shower');
                                                                                                            function sleep(isSleep) {
                                                                                                                setTimeout(() => {
                                                                                                                    if (isSleep) {
                                                                                                                        console.log('Good night');
                                                                                                                    } else {
                                                                                                                        console.log('No sleep');
                                                                                                                    }
                                                                                                                }, 200);
                                                                                                            }

                                                                                                            sleep(true);

                                                                                                        } else {
                                                                                                            console.log('No water');
                                                                                                        }
                                                                                                    }, 1200);
                                                                                                }

                                                                                                takeShower(true);

                                                                                            } else {
                                                                                                console.log('tomorrow learn english');
                                                                                            }
                                                                                        }, 2500);
                                                                                    }

                                                                                    learnEnglish(true);

                                                                                } else {
                                                                                    console.log('Missed lecture');
                                                                                }
                                                                            }, 800);
                                                                        }

                                                                        watchLecture(true);

                                                                    } else {
                                                                        console.log('Without dinner');
                                                                    }
                                                                }, 300);
                                                            }

                                                            dinner(true);

                                                        } else {
                                                            console.log('Watch video lesson one more time');
                                                        }
                                                    }, 4000);
                                                }

                                                doHomework(true);

                                            } else {
                                                console.log('You are not ready to do your homework');
                                            }
                                        }, 4000);
                                    }

                                    watchVideoLesson(true);

                                } else {
                                    console.log('Without breakfast');
                                }
                            }, 2000);
                        }

                        breakfast(true);

                    } else {
                        console.log('Smell from mouth')
                    }
                }, 3000);
            }

            cleanTeeth(true);

        } else {
            console.log('You are sleeping');
        }
    }, 1000);
}

wakeUp(true);