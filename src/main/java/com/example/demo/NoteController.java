package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteController {

	final NoteService noteService;
	
	public NoteController(NoteService noteService) {
		this.noteService = noteService;
	}
	
	@GetMapping("/notes")
	public List<Note> getNotes() {
		return noteService.getAllNotes();
	}
	
	@PutMapping("/notes")
	public Note addNotes(@RequestBody Note note) {
		return noteService.addNote(note);
	}
	
	@DeleteMapping("/notes{id}")
	public void deleteNotes(@PathVariable Long id) {
		noteService.deleteNote(id);
	}
}
