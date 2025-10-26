package com.example.demo;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class NoteService {

	final NoteRepository noteRepository;
	
	public NoteService(NoteRepository noteRepository) {
		this.noteRepository = noteRepository;
	}
	
	public List<Note> getAllNotes(){
		return noteRepository.findAll();
	}
	
	public Note addNote(Note note) {
		return noteRepository.save(note);
	}
	
	public void deleteNote(Long id) {
		noteRepository.deleteById(id);
	}
}
