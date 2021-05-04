const {response} = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res = response) => {
    try {
        const events = await Event.find().populate('user', 'name');

        return res.json({
            ok: true,
            events
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Could not get event'
        });
    }
}

const createEvents = async(req, res = response) => {
    try {
        const event = new Event(req.body);
        event.user = req.uid;
        const eventSaved = await event.save();

        return res.json({
            ok: true,
            event: eventSaved
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Could not create event'
        });
    }
}

const updateEvents = async(req, res = response) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        const uid = req.uid;
        
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'Event does not exists with that id'
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'You do not have permission to edit this event'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new: true});
        
        return res.json({
            ok: true,
            event: updatedEvent
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Could not update event'
        });
    }
}

const deleteEvents = async(req, res = response) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        const uid = req.uid;
        
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'Event does not exists with that id'
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'You do not have permission to delete this event'
            });
        }

        await Event.findByIdAndDelete(eventId);
        
        return res.json({
            ok: true
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Could not delete event'
        });
    }
}

module.exports = {
    getEvents,
    createEvents,
    updateEvents,
    deleteEvents
}