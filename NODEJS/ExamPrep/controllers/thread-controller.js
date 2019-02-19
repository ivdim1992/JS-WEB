const Thread = require('../models/Thread');
const User = require('../models/User');
const Message = require('../models/Message');

module.exports = {
    findThread: async (req, res) => {

        try {
            const currUser = await User.findOne({
                username: req.user.username
            })
            const otherUser = await User.findOne({
                username: req.body.username
            });

            let thread = await Thread.findOne({
                users: {
                    $all: [currUser.id, otherUser.id]
                }
            });

            if (!thread) {
                await Thread.create({
                    users: [currUser.id, otherUser.id]
                })
            }

            res.redirect(`/thread/${otherUser.username}`)


        } catch (error) {
            console.log(error);
        }
    },

    getMessages: async (req, res) => {
        try {

            let otherUser = await User.findOne({
                username: req.params.username
            })

            let thread = await Thread.findOne({
                users: {
                    $all: [req.user.id, otherUser.id]
                }
            })

            let messages = await Message.find({
                thread: thread.id,
            })

            messages.forEach(message => {
                if()
            })


            res.render('threads/messages', {
                username: req.params.username,
                messages,
                id: thread.id
            })
        } catch (error) {
            console.log(error)
        }
    },
    sendMessage: async (req, res) => {
        const content = req.body.message;
        const user = await User.findOne({
            username: req.params.username
        }) 
        const thread = req.body.threadId;

        try {
            await Message.create({
                content:content,
                user: user.id,
                thread
            });

            res.redirect('/thread/' + req.params.username)
        } catch (error) {
            console.log(error);
        }
    }

}